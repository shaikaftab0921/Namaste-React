import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantContext } from './Body';
import { Link } from 'react-router-dom';


export const RestaurantList = () => {
  return (
    <RestaurantContext.Consumer>
    {
      ([restaurantList,...args     ])=>{
        return (
        <div className='flex flex-wrap justify-between '>
        {restaurantList?
         restaurantList.map((restaurant,index)=>{
          return  (
              <RestaurantCard key={restaurant.data.id} {...restaurant}  />
          )
         })
        
        : <h1>Restaurant Not updated</h1>}
        </div>)
      }
    }
    </RestaurantContext.Consumer>
  )
}
