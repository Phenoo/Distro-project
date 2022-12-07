import React from 'react'
import {CgDanger} from 'react-icons/cg'


const  Modal = ({setModal, modal}) => {
  return (
    <div className="modal center">
        <div className='modal-container center'>
          <CgDanger />
          <br />
          <h4>
            this is not available now.
          </h4>
          <br />
          <button onClick={() => setModal(!modal)} className='btn'>
            okay
          </button>
        </div>
    </div>
  )
}

export default Modal 