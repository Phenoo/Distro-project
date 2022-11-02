import React from 'react'

import Img from '../assets/googlelogo.png'

import {SiApple} from 'react-icons/si'

const DownButton = () => {
  return (
    <div className="flex">
    <div>
      <a href="https://play.google.com/store/apps/details?id=com.courierx">
        <img src={Img} alt="logo" />
      </a>
    </div>
    <div>
      <button className='app-icon'> 
        <div>
          <SiApple />
        </div>
        <div>
          <span style={{textTransform: 'uppercase', fontSize: '8px'}}>
            download on 
          </span>
          <span style={{textTransform: 'capitalize'}}>app store</span>
        </div>
      </button>
    </div>
  </div>
  )
}

export default DownButton