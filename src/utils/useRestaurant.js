import {useState,useEffect} from 'react'

const url='https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING';
const useRestaurant = () => {
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [restaurants,setRestaurant]=useState([]);
    useEffect( ()=>{
      getRestaurantData();
  },[]);
  
  async function getRestaurantData(){
     let data= await fetch(url);
     let json= await data.json();
     let list=json?.data?.cards.filter(({cardType})=>cardType=== "seeAllRestaurants" );
     setRestaurant(list[0]?.data?.data?.cards);
     setFilteredRestaurant(list[0]?.data?.data?.cards);
     console.log('fetch Call',restaurants);
  }
  return  {filteredRestaurant,restaurants,setFilteredRestaurant};
}

export default useRestaurant;