import React from 'react'
import { Cloudinary_key } from '../constants/images';
const RestaurantDetails = (props) => {
  console.log(props);
  const { cloudinaryImageId ,name,cuisines,costForTwo,avgRating,totalRatingsString } = props;
  return (
    <div className='flex items-center bg-gray-300 h-80 px-10'>
      <img src={`${Cloudinary_key}${cloudinaryImageId}` } className='h-64 mr-20' />
      <div className=''>
        <h1 className='font-extrabold text-5xl '> {name}</h1> 
        <div className='font-thin text-xl'>{cuisines ? <div>{cuisines.join(',')}</div>: null}</div>
        <ul className='flex justify-between'>
          <li className=' px-2'>⭑{avgRating}<br></br>{totalRatingsString}</li>
          <li className='' >{costForTwo / 100} <br></br> For Two</li>
        </ul>
      </div>
    </div>
  )
}

export default RestaurantDetails
