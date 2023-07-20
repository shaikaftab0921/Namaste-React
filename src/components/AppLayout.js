import React from 'react'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
     <Footer/>
    </div>
  )
}
