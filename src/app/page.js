"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Approach from './Components/Approach'
import SelectLang from './Components/SelectLang'
import Footer from './Components/Footer'


const page = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Marquee />
      <SelectLang />
      <Approach />
      <Footer />

    </div>
  )
}

export default page