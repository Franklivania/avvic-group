import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {onClick, title, className, children} ) => {
  return (
    <button type='button' id='togglebutton' className={className} onClick={onClick}>
        {title}
        {children}
    </button>
  )
}

export default ToggleButton