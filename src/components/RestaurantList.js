import React,{useEffect, useState} from 'react';
import { RestaurantCard } from './RestaurantCard';


export const RestaurantList = () => {
    const [restaurantList,setRestaurantList]=useState();
    useEffect( ()=>{
        getRestaurantData();
    },[]);

    async function getRestaurantData(){
       let data= await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
       let json= await data.json();
       let list=json?.data?.cards.filter(({cardType})=>cardType=== "seeAllRestaurants" );
       setRestaurantList(list[0]?.data?.data?.cards);
       console.log('fetch Call',list);

    }

  return (
    <div className='flex flex-wrap '>
         {restaurantList?
          restaurantList.map((restaurant,index)=>{
           return  <RestaurantCard key={index} {...restaurant}  />
          })
         
         : <h1>Restaurant Not updated</h1>}
    </div>
  )
}
