import React, { useContext } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantContext } from './Body';

export const RestaurantList = () => {
  const [restaurantList] =useContext(RestaurantContext);

  return (
        <div className='flex flex-wrap justify-between '>
        {restaurantList?
         restaurantList.map((restaurant)=>{
          return  (
              <RestaurantCard key={restaurant.data.id} {...restaurant}  />
          )
         })
        : <h1>Restaurant Not updated</h1>}
        </div>  
  )
}
