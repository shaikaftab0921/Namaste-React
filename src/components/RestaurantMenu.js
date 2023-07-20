import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const url='https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=';

export const RestaurantMenu = () => {
  const [itemList,setItemList]=useState(null);
  const {resId}=useParams();
  console.log('resId',resId);
  async function getMenuOfRestaurant(){
    const data=await fetch(`${url}${resId}`);
    const json=await data.json();
    const groupedCard=json.data.cards.filter((card)=> card.hasOwnProperty('groupedCard'))[0];
    const menuList=groupedCard.groupedCard.cardGroupMap.REGULAR.cards;
    console.log('--->',menuList);
    setItemList(menuList);
  }
  
  useEffect(()=>{
   getMenuOfRestaurant();
  },[]);
  return (
    <>
    {itemList ?
    <div>
      {
        itemList.map(({card},index)=>{
          return <ItemList  key={index} {...card} />
        })
      }
    </div>
    : <div>Menu ItemList </div>}
    </>
  )
};
