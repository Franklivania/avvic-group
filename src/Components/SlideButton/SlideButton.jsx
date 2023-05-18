import React from 'react'

const SlideButton = ({onClick, className, image}) => {
  return (
    <button type='button' className={className} onClick={onClick}>
        <img src={image} alt="" />
    </button>
  )
}

export default SlideButton