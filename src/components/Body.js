import React, { useState,createContext,useEffect} from 'react'
import { Search } from './Search'
import { RestaurantList } from './RestaurantList'
import useRestaurant from '../utils/useRestaurant';

export const RestaurantContext=createContext();


export const Body = () => { 
const {filteredRestaurant,restaurants,setFilteredRestaurant}=useRestaurant();

  return (
    <div className='flex-row '>
      <RestaurantContext.Provider value={[filteredRestaurant,restaurants,setFilteredRestaurant]} >
        <Search />
        <RestaurantList/>
      </RestaurantContext.Provider>
    </div>
  )
}
