import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
const url='https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=';

export const RestaurantMenu = () => {
  const [itemList, setItemList] = useState(null);
  const [restaurantData, setRestaurantData] = useState({});
  const {resId}=useParams();
  console.log('resId',resId);
  async function getMenuOfRestaurant(){
    const data=await fetch(`${url}${resId}`);
    const json = await data.json();
    setRestaurantData(json?.data?.cards[0].card.card.info );
    const groupedCard=json.data.cards.filter((card)=> card.hasOwnProperty('groupedCard'))[0];
    const menuList=groupedCard.groupedCard.cardGroupMap.REGULAR.cards;
    setItemList(menuList);
  }
  
  useEffect(()=>{
   getMenuOfRestaurant();
  },[]);
  return (
    <>
      <RestaurantDetails {...restaurantData} />
    {itemList ?
    <div className='mx-14'>
      {
        itemList.map(({card},index)=>{
          return <ItemList key={index} {...card} />
        })
      }
    </div>
    : <div>Menu ItemList </div>}
    </>
  )
};
