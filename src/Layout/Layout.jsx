import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
