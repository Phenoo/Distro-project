import React from 'react'

import {FaCar, FaComments, FaLanguage, FaCogs, FaUsersCog, FaMoneyBill} from 'react-icons/fa'

const Feature = () => {
  return (
    <div className="full feature" id="experience">
      <section className="feature-container">
        <div className="center">
          <h6 className="tophead">
            experience
          </h6>
          <h4 className="headline">
            the experience, what you get
          </h4>
        <div className="divider"></div>
        </div>
        <div className="four-grid">
          <div className="item">
            <span>
              <FaCar />
            </span>
            <h6>
            Seamless Pickup Requests
            </h6>
            <p>
            The app allows you to give detail about your pickup request to enable your service efficiently matched to a driver with the appropriate vehicle.
            </p>
          </div>
          <div className="item">
            <span>
              <FaComments />
            </span>
            <h6>
            24/7 Messaging Service
            </h6>
            <p>
            The distro app allows you access to the customer service desk via the WhatsApp chat Integration.
            </p>
          </div>
          <div className="item">
            <span>
              <FaLanguage />
            </span>
            <h6>
            Multi-Lingual Function
            </h6>
            <p>
            The distro app enables you to operate in some local and international languages of choice.
            </p>
          </div>
          <div className="item">
            <span>
              <FaCogs />
            </span>
            <h6>
              logistics for any business size
            </h6>
            <p>
              we have an AI model which allows users to monitor their individual trips and we pick up any legal goods/ packages of any size.
            </p>
          </div>
          <div className="item">
            <span>
              <FaUsersCog />
            </span>
            <h6>
              trained & trusted drivers
            </h6>
            <p>
              we have good and qualified drivers, that know routes around the country. They are well-trained and responsible.
            </p>
          </div>
          <div className="item">
            <span>
              <FaMoneyBill />
            </span>
            <h6>
              detailed descriptive option for optimum effective pricing
            </h6>
            <p>
              Our prices is one of the best in the market. We're affordable yet gives out quality services to our customers.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Feature