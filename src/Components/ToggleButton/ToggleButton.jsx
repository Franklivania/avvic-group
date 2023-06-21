import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {onClick, title, className, children, disabled} ) => {
  return (
    <button type='button' id='togglebutton' className={className} disabled={disabled} onClick={onClick}>
        {title}
        {children}
    </button>
  )
}

export default ToggleButton