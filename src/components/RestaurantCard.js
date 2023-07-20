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
    <div  className='flex-row flex-wrap m-5 h-96 p-3 w-80 hover:shadow-2xl '>
        <img alt='Restaurant Card' src={Cloudinary_key+`${cloudinaryImageId}`}/>
        <h3 >{name}</h3>
        <h3>{avgRating} stars</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>₹{costForTwo / 100} For Two</h4>
        <h5>Deliver in {deliveryTime} Min</h5>
    </div>
  )
}
