import React from 'react'
import { Cloudinary_key } from '../constants/images'
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

export const Item = ({id,name,price,imageId,description}) => {
 
  const dispatch=useDispatch();
  
   function handleClick(item){
    dispatch(addItem(item));
   }

  return (
    <div className='  border-black mx-5  my-3 pr-9 w-full' >
        <ul className='flex justify-between items-center pb-10 border-b  border-b-gray-400'>
        <li className='flex-row '>
          <li>{name}</li>
          <li >  ₹ {price/100}</li>
          <li className='font-thin w-1/2 pl-4 text-s'>{description}</li>
        </li>
        <li className='flex'>
        <button onClick={()=>handleClick({id,name,price,description})}
        className='px-4 shadow-lg border border-black rounded-md'>
              Add 
            </button>
        </li>
      
            {/* {
              imageId? <img alt='item image' 
            src={Cloudinary_key+`${imageId}`}
            className='w-28 h-28 justify-self-end'
            />: null
            } */}
        </ul>
    </div>
  )
}
