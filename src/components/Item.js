import React from 'react'
import { Cloudinary_key } from '../constants/images'

export const Item = ({id,name,price,imageId}) => {
  return (
    <div className='flex  border-black mx-10 my-3 pr-9 w-full' >
        <ul className='flex flex-wrap '>
            <li className='align-middle'>{name}</li>
            <li className='justify-self-end'>${price/100}</li>
            {
               imageId? <img alt='item image' 
            src={Cloudinary_key+`${imageId}`}
            className='w-28 h-28 justify-self-end'
            />: null
            }
        </ul>
    </div>
  )
}
