"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Approach from './Components/Approach'
import Footer from './Components/Footer'
import CardComponent from './Components/Carousal'
import Explore from './Components/Explore'
import KeyFeatures from './Components/Features'




const page = () => {
  return (
    <div className='bg-[#837b9e]'>
      <Navbar />
      <LandingPage />
      <Approach />
      <KeyFeatures/>
      <CardComponent/>
      <Explore/>
      <Footer />
      

    </div>
  )
}

export default page