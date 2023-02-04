import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard';
// import 

export const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
  return (
    <div>
        <h1 className='font-bold text-3xl'>Cart Items</h1>
        <div className='flex'>
            {!cartItems.length && `No item added to cart!`}
            {cartItems.map(cartItem => <ItemCard key={cartItem.id} item={cartItem} />)}
        </div>
    </div>
  )
}
