import React from 'react'
import { Search } from './Search'
import { RestaurantList } from './RestaurantList'
export const Body = () => {
  return (
    <div className='flex-row '>
       <Search/>
       <RestaurantList/>
    </div>
  )
}
