import React from 'react'
import Logo from './Logo'

import {FaTwitter, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='foot-grid'>
          <div className="foot">
            <Logo />
            <br />
            <p>
            The entire public. From businesses to Individuals to corporate bodies, who require logistics services within the cities of operation.
            </p>
          </div>
            <div className="foot">
              <h6>
              About Us
              </h6>
              <ul>
                <li>
                  <a href="mailto: hello@distro.com.ng">  support center</a>
                </li>
                <li>
                  customer support
                </li>
                <li>
                <Link to='/policy'>
                  copyright
                </Link>
                </li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                our information
              </h6>
              <ul>
                <li>
                  <Link to='/policy'>
                  return policy
                  </Link>
                </li>
                <li>
                  <Link to='/policy'>
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link to='/policy'>
                    terms & conditions 
                  </Link>
                </li>
                <li>site map</li>
                <li>store hours</li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                Social Media
              </h6>
              <div className="flex social">
                <div>
                  <a href="https://twitter.com/Distrongr?t=_9U3TgNKTdWM34evqmTUkA&s=09">
                    <FaTwitter />
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com/distrongr?igshid=YzdkMWQ2MWU=">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="between">
          <p>
            &copy; distro logistics
          </p>
          <ul>
            <li>
              Phone No: +234 818 601 4986
            </li>
            <li>
              Email: <a href="mailto: hello@distro.com.ng">  hello@distro.com.ng</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer