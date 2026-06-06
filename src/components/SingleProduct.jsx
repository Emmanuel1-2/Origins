/**
 * SingleProduct.jsx — Product detail page (reads `:id` from route).
 * Shows product info and allows adding to cart via `useCart()`.
 */
import React from 'react'
import getProducts from './Productdata';
import styles from './SingleProduct.module.css'
import { useParams } from 'react-router-dom'
import { useCart } from './Cartcontext';

export default function Singleproduct() {
  const { addToCart, cartItems } = useCart();
  const products = getProducts();
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles['single-product-container']} style={{marginTop: "5rem"}}>
        <div className={styles['single-product-wrapper']}>Product not found.</div>
      </div>
    );
  }

  const inCart = cartItems.find(item => item.id === product.id);
  const inCartQuantity = inCart ? `(${inCart.quantity ?? inCart.qty ?? 1})` : "";

  return (
    <div className={styles['single-product-container']} style={{marginTop: "5rem"}}>
      <div className={styles['single-product-wrapper']}>
        <img className={styles['single-product-image']} loading="lazy" src={product.image} alt="" />
        <div className={styles['single-products-text-con']}>
          <p className={styles['single-product-text1']}>{product.name}</p>
          <p className={styles['single-product-text2']}>${product.price}.00</p>
          <p className={styles['single-product-text3']}>{product.description}</p>
          <span className={styles['single-product-add-to-cart']} onClick={() => addToCart(product.id)}>Add to Cart {inCartQuantity}</span>
        </div>
      </div>
    </div>
  )
}
