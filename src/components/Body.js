import React, { useState } from 'react'
import { Search } from './Search'
import { RestaurantList } from './RestaurantList'
export const Body = () => {
  const [searchText,setSearchText]=useState();

  return (
    <div className='flex-row '>
            <div className='bg-red-900 py-4  flex flex-wrap '>
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-full py-2 pl-3 pr-3 ml-8 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>   
            <button className='ml-4 bg-slate-300 rounded-full px-4 border border-r-black'> Search</button>
    </div>     
    <RestaurantList />
    </div>
  )
}
