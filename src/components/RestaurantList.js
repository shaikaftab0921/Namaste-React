import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantContext } from './Body';
import { Link } from 'react-router-dom';


export const RestaurantList = () => {
  return (
    <RestaurantContext.Consumer>
    {
      ([restaurantList,...args])=>{
        return (
        <div className='flex flex-wrap'>
        {restaurantList?
         restaurantList.map((restaurant,index)=>{
          return  (
            <Link to={`restaurant/${restaurant.data.id}`} key={index}>
              <RestaurantCard key={index} {...restaurant}  />
            </Link>                          
          )
         })
        
        : <h1>Restaurant Not updated</h1>}
        </div>)
      }
    }
    </RestaurantContext.Consumer>
  )
}
