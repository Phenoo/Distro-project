import { useEffect } from 'react';


import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Offer from "./components/Offer"
import Feature from "./components/Feature"



import './styles/styles.scss'
import Sectors from "./components/Sectors"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Faq from "./components/Faq"
import scrollreveal from 'scrollreveal'




const App = () => {


  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: true
    });
    sr.reveal(
      `.fixed,
      .item,
      .download-container,
      `,
      {
        opacity: 0,
        interval: 300
      }
    )
  })
  useEffect(() => {
    const srl = scrollreveal({
      origin: "left",
      distance: "50px",
      duration: 1500,
      reset: true
    });
    srl.reveal(
      `
      .home,
      #about,
      .offer-item,
      .question,
      .foot

      `,
      {
        opacity: 0,
        interval: 300
      }
    )
    })
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