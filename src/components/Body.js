import React, { useState,createContext,useEffect} from 'react'
import { Search } from './Search'
import { RestaurantList } from './RestaurantList'

export const RestaurantContext=createContext();


export const Body = () => {
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [restaurants,setRestaurant]=useState([]);
  useEffect( ()=>{
    getRestaurantData();
},[]);

async function getRestaurantData(){
   let data= await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
   let json= await data.json();
   let list=json?.data?.cards.filter(({cardType})=>cardType=== "seeAllRestaurants" );
   setRestaurant(list[0]?.data?.data?.cards);
   setFilteredRestaurant(list[0]?.data?.data?.cards);
   console.log('fetch Call',restaurants);
}

  return (
    <div className='flex-row '>
      <RestaurantContext.Provider value={[filteredRestaurant,restaurants,setFilteredRestaurant]} >
        <Search />
        <RestaurantList />
      </RestaurantContext.Provider>
    </div>
  )
}
