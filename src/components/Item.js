import React, { useState } from 'react'
import { Cloudinary_key } from '../constants/images'
import { addItem ,removeItem} from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

export const Item = ({id,name,price,imageId,description}) => {
 
  const [count,setCount]=useState(0);
  const dispatch=useDispatch();
  
   function increment(item){
    setCount(count+1);
    dispatch(addItem({...item,count:count+1}));
   }
   function decrement(item){
    if(count===0) return;
    setCount(count-1);
    dispatch(removeItem({...item,count:count-1}));
   }
  const buttonElement= (<button 
  className=' ml-10  flex justify-between  shadow-lg border border-black rounded-md'>
         <span onClick={()=>decrement({id,name,price,description})} className='px-2'>- </span>
         <span className='px-2'> {count} </span>
         <span onClick={()=>increment({id,name,price,description})}className='px-2'> + </span>
      </button>);

  return (
    <div className='  border-black mx-5  my-3 pr-9 w-full' >
        <ul className='flex justify-between items-center pb-10 border-b  border-b-gray-400'>
        <li className='flex-row '>
          <li>{name}</li>
          <li >  ₹ {price/100}</li>
          <li className='font-thin w-1/2 pl-4 text-s'>{description}</li>
        </li>
            {
              imageId? (<div className='flex-row items-center'>
                <img alt='item image' 
              src={Cloudinary_key+`${imageId}`}
              className='w-28 h-28 justify-self-end'
              />
              {buttonElement}
              </div>): buttonElement
            }
        </ul>
    </div>
  )
}
