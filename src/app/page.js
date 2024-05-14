"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'


const page = ({ Component, pageProps }) => {
  return (
    <div>
        <Navbar/>
        {/* <Component {...pageProps} /> */}
        <Home/>
        
    </div>
  )
}

export default page