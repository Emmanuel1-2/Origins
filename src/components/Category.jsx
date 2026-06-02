import React, { useMemo, useState } from 'react'
import getProducts from './Productdata'
import styles from './category.module.css'
import { Link, useParams } from 'react-router-dom'

function inferCategory(id){
  if(id >=1 && id <= 20) return 'Skincare'
  if(id >=21 && id <= 28) return 'Cosmetics'
  if(id >=29 && id <= 33) return 'Bodycare'
  if(id >=34) return 'Haircare'
  return 'Other'
}

export default function Category({ categoryName: propCategory }) {
  const params = useParams() || {}
  const paramCategory = params.category || null
  const products = getProducts();
  const [query, setQuery] = useState('')
  const [priceSort, setPriceSort] = useState('none')

  const categories = useMemo(()=>{
    const set = new Set()
    products.forEach(p=> set.add(inferCategory(p.id)))
    return Array.from(set)
  }, [products])

  const selectedCategory = propCategory || paramCategory || 'All'

  const filtered = useMemo(()=>{
    let list = products.map(p=> ({...p, category: inferCategory(p.id)}))
    if(selectedCategory && selectedCategory !== 'All'){
      list = list.filter(p=> p.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    if(query.trim()){
      const q = query.toLowerCase()
      list = list.filter(p=> p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }
    if(priceSort === 'asc') list = list.sort((a,b)=> a.price - b.price)
    if(priceSort === 'desc') list = list.sort((a,b)=> b.price - a.price)
    // For main category pages, limit to 5 items as requested
    const primary = ['Skincare','Cosmetics','Bodycare','Haircare']
    if(primary.includes(selectedCategory)) return list.slice(0,5)
    return list
  }, [products, selectedCategory, query, priceSort])

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Categories</h3>
        <ul className={styles.catList}>
          <li><Link className={styles.catLink} to={'/product'}>All</Link></li>
          {categories.map(cat=> (
            <li key={cat}><Link className={styles.catLink} to={`/category/${cat}`}>{cat}</Link></li>
          ))}
        </ul>
        <div className={styles.filters}>
          <label className={styles.filterLabel}>Search</label>
          <input className={styles.searchInput} value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search products...' />
          <label className={styles.filterLabel}>Sort by price</label>
          <select className={styles.select} value={priceSort} onChange={e=>setPriceSort(e.target.value)}>
            <option value='none'>None</option>
            <option value='asc'>Lowest</option>
            <option value='desc'>Highest</option>
          </select>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>{selectedCategory === 'All' ? 'All Products' : selectedCategory}</h1>
          <p className={styles.count}>{filtered.length} items</p>
        </header>

        <section className={styles.grid}>
          {filtered.length === 0 && (
            <div className={styles.empty}>No products match your search.</div>
          )}
          {filtered.map(product=> (
            <article key={product.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={product.image} alt={product.name} className={styles.image} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>${product.price}</span>
                  <Link className={styles.viewBtn} to={`/singleproduct/${product.id}`}>View</Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
