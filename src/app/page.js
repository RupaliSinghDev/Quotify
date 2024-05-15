"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Approach from './Components/Approach'
import SelectLang from './Components/SelectLang'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import English from './Routes/English'


const page = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/english">
            <English />
          </Route>
        </Switch>
      </Router>
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