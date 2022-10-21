import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const Accordion = ({title, answer, id}) => {
  const [show, setShow] = useState(false);


  return (
    <li onClick={() => setShow((prev) => !prev)} className='question'>
      <div className='header'>
        <div className='heading'>
          <div>
            <button>
            {
            show ? <AiOutlineMinus /> : <AiOutlinePlus/> 
          }
            </button>
          </div>
          <div>
          <h6>{title}</h6>
          </div>
        </div>
      </div>
      {
        show && 
      <div>
        <p>{answer}</p>  
      </div>
      }
  </li>
  )
}

export default Accordion