"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Approach from './Components/Approach'
import SelectLang from './Components/SelectLang'
import Footer from './Components/Footer'
import CardComponent from './Components/Carousal'


const page = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Approach />
      {/* <SelectLang /> */}
      <CardComponent/>
      <Footer />

    </div>
  )
}

export default page