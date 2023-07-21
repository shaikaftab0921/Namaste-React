import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../utils/store'


export const AppLayout = () => {
  return (
    <div>
    <Provider store={store}>
    <Header/>
    <Outlet/>
     <Footer/>  
    </Provider>  
   
    </div>
  )
}
