import React from 'react'
import { Item } from './Item';

const ItemList = ({card:cards}=props) => {
  
   const {title,itemCards}=cards;
    console.log(cards);
  return (
    <div className='flex-row m-10'>
         <h1 className='font-extrabold shadow-lg'>{title}</h1>
         <ul className='border-l border-l-gray-400'>
            {
                itemCards?
                itemCards.map(({card})=><Item key={card.info.id} {...card.info} />)
            : null
            }
         </ul>
    </div>
  )
}

export default ItemList;
