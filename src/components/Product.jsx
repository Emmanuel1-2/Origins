/**
 * Product.jsx — Product listing with search and add-to-cart functionality.
 * Uses `getProducts()` to load products and `useCart()` for cart actions.
 */
import React from 'react'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import getProducts from "./Productdata";
import styles from "./Product.module.css";
import { useCart } from './Cartcontext';

export default function Product() {
  const products = getProducts();
  let { addToCart, cartItems } = useCart();
  const [search, setSearch] = useState("");
  let filteredProducts = [];
  filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
  
  const displayedProducts = search? filteredProducts: products;
  return (
    <div className={styles['products-page']}>
      <div className={styles['products-intro-con']}>
        <p className={styles['products-first-text']}>Our Products</p>
        <p className={styles['products-second-text']}>Discover amazing products at great prices</p>
      </div>

      <div className={styles['search-container']}>
        <div className={styles['search-wrapper']}>
          <i style={{color: "grey"}} className="fa-solid fa-magnifying-glass"></i>
          <input className={styles['search-input']} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" />
        </div>
      </div>

      <div className={styles['products-container']}>
        <div className={styles['products-wrapper']}>
          {
            displayedProducts.length >=1 ? displayedProducts.map((product) => {
            const inCart = cartItems.find(item => item.id === product.id);
            const inCartQuantity = inCart ? `(${inCart.quantity ?? inCart.qty ?? 1})` : "";
            return (
            <div key={product.id} className={styles['products-content-con']}>
              <img className={styles['products-image']} width={300} loading="lazy" src={product.image} alt="" />
              <div className={styles['products-name']}>{product.name}</div>
              <div className={styles['products-price']}>${product.price}.00</div>
              <div className={styles['products-more-actions']}>
                <span className={styles['products-span1']}><Link to={`/singleproduct/${product.id}`} style={{textDecoration: "none", color: "white"}}>View Details</Link></span> &nbsp;
                <span className={styles['products-span2']} onClick={()=> addToCart(product.id)}>Add to Cart {inCartQuantity}</span>
              </div>
            </div>
            )
          }) : <div className={styles['no-available-products']}>No Available Products</div>
          }
        </div>
      </div>
    </div>
  )
}
