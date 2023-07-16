import React from 'react';
import { Cloudinary_key } from '../constants/images';

export const RestaurantCard =  (restaurantList) => {
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
        cloudinaryImageId,
        address,
      } = restaurantList?.data;

      return (
    <div id='card' className='flex-row flex-wrap m-3 p-3 h-1/4 w-1/5 hover:shadow-2xl '>
        <img alt='Restaurant Card' src={Cloudinary_key+`${cloudinaryImageId}`}  className='h-1/4  border'/>
        <h3 >{name}</h3>
        <h3>{avgRating} stars</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>₹{costForTwo / 100} For Two</h4>
        <h5>Deliver in {deliveryTime} Min</h5>
    </div>
  )
}
