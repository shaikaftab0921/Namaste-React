import React from 'react';
import { Cloudinary_key } from '../constants/images';
import { Link } from 'react-router-dom';
export const RestaurantCard =  (restaurantList) => {
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
        cloudinaryImageId,
        id,
      } = restaurantList?.data;
  return (
    <Link to={`restaurant/${id}`} key={id}>

    <div  className='flex-row flex-wrap w-80 p-3 m-3 hover:shadow-2xl '>
        <img alt='Restaurant Card' src={Cloudinary_key+`${cloudinaryImageId}`}/>
        <span className='font-normal'>{name}</span>
          <h4 className='my-4'>{cuisines.join(", ")}</h4>
          <ul className='flex justify-between'>
                <li className='bg-green-400 px-2 text-white'>⭑  {avgRating}</li>
              <li className='text-gray-500' >{costForTwo / 100} For Two</li>
              <li className='text-gray-500'>{deliveryTime} Mins</li>
          </ul>
      </div>
    </Link>                          
  )
}
