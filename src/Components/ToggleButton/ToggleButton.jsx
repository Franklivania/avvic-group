import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {onClick, title, className} ) => {
  return (
    <button type='button' id='togglebutton' className={className} onClick={onClick}>
        {title}
    </button>
  )
}

export default ToggleButton