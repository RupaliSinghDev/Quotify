"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Approach from './Components/Approach'
import SelectLang from './Components/SelectLang'
import Footer from './Components/Footer'
import CardComponent from './Components/Carousal'
import Explore from './Components/Explore'
import ContactForm from './Components/ContactForm'



const page = () => {
  return (
    <div className='bg-[#7c8894]'>
      <Navbar />
      <LandingPage />
      <Approach />
      {/* <SelectLang /> */}
      <CardComponent/>
      <Explore/>
      <ContactForm/>
      <Footer />
      

    </div>
  )
}

export default page