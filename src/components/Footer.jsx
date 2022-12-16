import React from 'react'
import Logo from './Logo'

import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

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
                  copyright
                </li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                our information
              </h6>
              <ul>
                <li>
                  return policy
                </li>
                <li>
                  privacy policy
                </li>
                <li>
                  terms & conditions
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
                  <FaFacebook />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaLinkedin />
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