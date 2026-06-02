import React from 'react'
import { useCart } from './Cartcontext'
import getProducts from './Productdata'
import styles from './Checkout.module.css'

export default function Checkout(){
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const products = getProducts();

  const items = cartItems.map(ci => {
    const p = products.find(prod => prod.id === ci.id) || { id: ci.id, name: 'Unknown', price: 0 };
    return { ...p, quantity: ci.quantity }
  })

  const subtotal = items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 0), 0)
  const tax = +(subtotal * 0.1).toFixed(2)
  const total = +(subtotal + tax).toFixed(2)

  if(cartItems.length === 0){
    return (
      <div className={styles['empty-cart-con']}>
        <p className={styles['checkout-title']}>Your cart is empty.</p>
      </div>
    )
  }

  return (
    
    <div className={styles['checkout-page']}>
      
      <p className={styles['checkout-title']}>Checkout</p>
      <div className={styles['checkout-wrapper']}>
        <div className={styles['checkout-products-con']}>
          {items.map(item => (
            <div className={styles['checkout-product-con']} key={item.id}>
              {item.image && <img className={styles['checkout-product-image']} src={item.image} alt={item.name} />}
              <div className={styles['checkout-product-text-con']}>
              <div className={styles['checkout-product-name']}>{item.name}</div>
              <div className={styles['checkout-product-price']}>${item.price}.00</div>
              <div className={styles['checkout-quantity-control-con']}>
                <span className={styles['checkout-quantity-control1']} onClick={() => decreaseQuantity(item.id)}><i className="fa-solid fa-minus"></i></span>
                <span>{item.quantity}</span>
                <span className={styles['checkout-quantity-control2']} onClick={() => addToCart(item.id)}><i className="fa-solid fa-plus"></i></span>
              </div>
              <div className={styles['checkout-total-price']}>${(item.price * item.quantity).toFixed(2)}</div>
              <span className={styles['checkout-remove-btn']} onClick={() => removeFromCart(item.id)}>Remove</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['checkout-quantity-control-con2']}>
          <div className={styles['checkout-quantity-control-wrapper']}>
            <div className={styles['checkout-subtotal']}>Subtotal: ${subtotal.toFixed(2)}</div>
            <div className={styles['checkout-tax']}>Tax (10%): ${tax.toFixed(2)}</div>
            <div className={styles['checkout-total']}>Total: ${total.toFixed(2)}</div>
            <div className={styles['place-order-btn-con']}>
              <button className={styles['place-order-btn']} onClick={() => { clearCart(); alert('Order placed — thank you!') }}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
