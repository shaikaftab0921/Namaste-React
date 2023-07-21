import React from 'react'
import { useSelector} from 'react-redux';

const CartItems = () => {
    const [cartItems,totalAmount ]=useSelector(store =>  [store.cart.items,store.cart.totalAmount]);

  return (
    <div className='mx-52 '>
     <div className='flex p-10 justify-between border-b-4 border-black shadow-lg '>
      <h2>Item</h2>
      <h2> Price</h2>
      <h2>Quantity</h2>
    </div>   
    {
      // console.log('cartItems',cartItems)
    cartItems?cartItems.map(({name,price,description,id})=>{
       return (
        <ul key={id} className='flex  p-10 justify-between  '>
            <li>{name}</li>
            <li >  ₹ {price/100}</li>
            <li className='font-thin  text-s'>1</li>
      </ul>
       )
    }):null
  }
  <div className='flex p-10 justify-between border-t-4 border-black shadow-lg '>
      <h2>Total Amount</h2>
      <h2>{totalAmount/100}</h2>
    </div>   
  </div>
  )
}

export default CartItems;