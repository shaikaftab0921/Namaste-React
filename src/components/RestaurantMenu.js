import React from 'react'
import ItemList from './ItemList';
import RestaurantDetails from './RestaurantDetails';
import useMenu from '../utils/useMenu';

export default  RestaurantMenu = () => {

  const {itemList,restaurantData}=useMenu();
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
