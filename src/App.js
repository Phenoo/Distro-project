import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Policy from './pages/Policy'
import Main from './pages/Main'
import './styles/styles.scss'
import Footer from "./components/Footer"
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
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/policy' element={<Policy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App