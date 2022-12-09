import React from 'react'
import { useState } from 'react'
import {CgDanger} from 'react-icons/cg'


const  Modal = ({setModal, modal}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setModal(!modal);
  }
  return (
    <div className="modal center">
        <div className='modal-container center'>
          <CgDanger />
          <p>
            The Distro IOS App is coming soon. Join our waitlist of Pre-users waiting to get notified.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input type="email" placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
          </form>
          <button onClick={handleSubmit} className='btn'>
            okay
          </button>
        </div>
    </div>
  )
}

export default Modal 