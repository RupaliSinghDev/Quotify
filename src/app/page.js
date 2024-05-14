"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'


const page = ({ Component, pageProps }) => {
  return (
    <div>
        <Navbar/>
        {/* <Component {...pageProps} /> */}
        <LandingPage/>
        
    </div>
  )
}

export default page