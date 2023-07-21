import React,{useState} from 'react';
import { RestaurantContext } from './Body';



export const Search = ( props) => {
  console.log('Search props---->',props);
  const [searchText,setSearchText]=useState('');

  function getFilteredRestaurant(inputText,restaurants){
    setSearchText(inputText);
    return restaurants.filter(({data})=> data.name.toLowerCase().includes(inputText));
  }
  return (
    <RestaurantContext.Consumer>{
       ([_,restaurants,setFilteredRestaurant])=>{
         return (
          <div className='bg-red-900 py-4  flex flex-wrap '>
          <input 
          className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-full py-2 pl-3 pr-3 ml-8 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
          placeholder="Search for anything..." 
          type="text" 
          name="search"
          onChange={
            (e)=>{
              setSearchText(e.target.value);
            }          
            }
          />   
          <button 
          onClick={()=>{
            setFilteredRestaurant(getFilteredRestaurant(searchText,restaurants));
          }}
          className='ml-4 bg-slate-300 rounded-full px-4 border border-black'
          > Search
          </button>    
          </div> 
         )
     }
}
    </RestaurantContext.Consumer>
 
  )
}
