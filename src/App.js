import React from 'react'


import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Offer from "./components/Offer"
import Feature from "./components/Feature"



import './styles/styles.scss'
import Sectors from "./components/Sectors"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Faq from "./components/Faq"




const App = () => {
  return (
    <>
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
      <Footer />
    </>
  )
}

export default App