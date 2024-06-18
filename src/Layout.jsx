import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Left from './Components/Left'
import Right from './Components/Right'

function Layout() {
  return (
    <>
      <Navbar/>
      <div className=' flex '>
      <Left/>
      <Outlet/>
      <Right/>
      </div>
      
    </>
  )
}

export default Layout
