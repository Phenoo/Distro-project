import React, {useState} from 'react'
import Modal from '../components/Modal'
import Img from '../assets/googlelogo.png'

import {SiApple} from 'react-icons/si'

const DownButton = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className="flex">
        <div className='google-btn'>
          <a href="https://play.google.com/store/apps/details?id=com.courierx">
            <img src={Img} alt="logo" />
          </a>
        </div>
        <div>
          <button className='app-icon' onClick={() => setModal(!modal)}> 
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
      {modal && <Modal setModal={setModal} modal={modal} />}
    </>
  )
}

export default DownButton