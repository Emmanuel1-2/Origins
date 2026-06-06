/**
 * Productbox.jsx — Small presentational card for featured products on Home.
 * Props: `product` (image URL), `productName`, `productAdv`, `price`.
 */
import React from 'react'

export default function Productbox({product, productName, productAdv, price}) {
  return (
    <div className='product-box'>
      <img className='productImg' loading="lazy" src={product} alt="" />
      <p className='productName'>{productName}</p>
      <p className='productAdv'>{productAdv}</p>
      <p className='productPrice'>${price.toFixed(2)}</p> 
    </div>
  )
}
