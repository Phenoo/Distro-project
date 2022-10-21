import React, {useState, useRef, useEffect} from 'react'
import Logo from './Logo'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [fixed, setFixed] = useState('');
  const navRef = useRef();


  useEffect(() => {

    const windowScroll = () => {
      let windowHeight = window.scrollY
  
      if(windowHeight > 500){
        setFixed('fixed');
      } else{
        setFixed('')
      }
    }

    window.addEventListener('scroll', windowScroll);
  })

  return (
    <nav ref={navRef} className={`${fixed}`}>
        <header className="header">
            <Logo />
            <div className={`nav-links ${navbar ? 'navbar' : ''}`} >
              <ul>
                <li>
                  <a href="#a">
                    about
                  </a>
                </li>
                <li>
                  <a href="#a">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#a">
                    features
                  </a>
                </li>
                <li>
                  <a href="#a">
                    download
                  </a>
                </li>
                <li>
                  <a href="#a">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn">
              get started
            </button>
            <button className='menu-btn' onClick={() => setNavbar(!navbar)}>
            {
              navbar ? <FaTimes/ > : <FaBars />
            }
          </button>
        </header>
    </nav>
  )
}

export default Navigation