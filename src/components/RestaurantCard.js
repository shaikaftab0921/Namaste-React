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
    <div id='card' className='flex-row flex-wrap m-5 p-5 h-1/4 w-1/4 border border-slate-950'>
        <img alt='Restaurant Card' src={Cloudinary_key+`${cloudinaryImageId}`}  className='h-1/4 p-1 border border-black'/>
        <h3 >{name}</h3>
        <h3>{avgRating} stars</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>₹{costForTwo / 100} For Two</h4>
        <h5>Deliver in {deliveryTime} Min</h5>
    </div>
  )
}
