import React, {useState, useRef, useEffect} from 'react'
import Logo from './Logo'
import {FaBars, FaTimes} from 'react-icons/fa'
import DownButton from './DownButton';

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

  
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setNavbar(!navbar)
  }

  return (
    <nav ref={navRef} className={`${fixed}`}>
        <header className="header">
            <Logo />
            <div className={`nav-links ${navbar ? 'navbar' : ''}`} >
              <ul>
                <li onClick={() => scrollTo('home')}>
                  <a href="#a">
                    home
                  </a>
                </li>
                <li onClick={() => scrollTo('experience')}>
                  <a href="#a">
                  Experience you get
                  </a>
                </li>
                <li onClick={() => scrollTo('sectors')}>
                  <a href="#a">
                    sectors
                  </a>
                </li>
                <li onClick={() => scrollTo('download')}>
                  <a href="#a">
                    download
                  </a>
                </li>
                <li onClick={() => scrollTo('faq')}>
                  <a href="#a" style={{textTransform: 'uppercase'}}>
                    faq
                  </a>
                </li>
              </ul>
              <div className="appear">
                <DownButton />
              </div>
            </div>
            <div className="disappear">
              <DownButton />
            </div>
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