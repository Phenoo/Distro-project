import React from 'react'
import Navigation from '../components/Navigation'
import Offer from '../components/Offer'
import Feature from '../components/Feature'
import Home from '../components/Home'
import Faq from '../components/Faq'
import Download from '../components/Download'
import Sectors from '../components/Sectors'

const Main = () => {
  return (
    <div>
      <div className="full">
        <Navigation />
        <Home />
      </div>
      <main>
        <Offer />
        <Feature />
        <Sectors />
        <Download />
        <Faq />
      </main>
    </div>
  )
}

export default Main