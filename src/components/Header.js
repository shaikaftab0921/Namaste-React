import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='shadow-xl mb-4 flex items-center justify-between flex-wrap'>
       <img 
       className='w-24 h-24'
       alt="logo" 
src='https://static.vecteezy.com/system/resources/previews/006/735/689/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-free-vector.jpg'
      />     
      <ul className='flex justify-around px-10'>
        <li className='px-10'>About</li>
        <li className='px-10'> Contact</li>
        <Link to='/cart'><li className='px-10'> Cart</li></Link>
      </ul>  
    </div>
  )
}
