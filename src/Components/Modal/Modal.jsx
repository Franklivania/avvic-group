import React from 'react'
import './Modal.scss'
import 'animate.css'

const Modal = ({closeModal, title, text, image, children}) => {
  return (
    <div id='modal'>

        <div className={`content animate__animated ${closeModal ? 'animate__zoomIn' : 'animate__zoomOut'}`}>
            <button type='button' onClick={closeModal} id='btn'>
                <i className='fa-solid fa-times fa-2x'></i>
            </button>

            <div className="container">
                <img src={image} alt={title} />
                <aside>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    {children}
                </aside>
            </div>
        </div>
    </div>
  )
}

export default Modal