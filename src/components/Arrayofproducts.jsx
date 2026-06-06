/**
 * Arrayofproducts.jsx — Example ProductsContext provider used for demo data.
 * Exports `ProductsContext` and renders `Product` inside the provider.
 */
import React from 'react'
import { createContext } from 'react'
import Product from './Product'
export const ProductsContext = createContext()

export default function Arrayofproducts() {
    const products = [
    {
      id: 1,
      name: "apple",
      image: "",
      price: 10,
    },
    {
      id: 2,
      name: "orange",
      price: 20,
    },
    {
      id: 3,
      name: "banana",
      price: 30,
    },
  ]
  return (
    <ProductsContext.Provider value={products}>
        <Product/>
    </ProductsContext.Provider>
  )
}
