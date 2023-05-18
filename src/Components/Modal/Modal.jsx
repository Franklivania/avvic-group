import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div id='modal'>
        <button type='button' onClick={closeModal}>
            <i className='fa-solid fa-times fa-3x'></i>
        </button>
    </div>
  )
}

export default Modal