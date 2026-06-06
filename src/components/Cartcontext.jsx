/**
 * Cartcontext.jsx — Provides `CartContext` and `useCart()` hook.
 * API: `addToCart`, `decreaseQuantity`, `removeFromCart`, `clearCart`.
 */
import React from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext(null);
export default function CartProvider({children}) {
    const [cartItems, setcartItems] = useState([]);

    function addToCart(productId){
        let checked = cartItems.find((item) => item.id === productId);

        if(checked){
            const itemQuantity = checked.quantity;
            setcartItems(cartItems.map((item) => item.id ===productId? {...item, quantity: itemQuantity+1
            }: item))
        }
        else{
            setcartItems([...cartItems, {id: productId, quantity: 1}])
        }
    }

    function decreaseQuantity(productId){
        const found = cartItems.find(item => item.id === productId);
        if(!found) return;
        if(found.quantity > 1){
            setcartItems(cartItems.map(item => item.id === productId ? {...item, quantity: item.quantity - 1} : item))
        } else {
            setcartItems(cartItems.filter(item => item.id !== productId))
        }
    }

    function removeFromCart(productId){
        setcartItems(cartItems.filter(item => item.id !== productId))
    }

    function clearCart(){
        setcartItems([])
    }

   return(
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
   );
}

export function useCart(){
    const context = useContext(CartContext);

    return context
}
