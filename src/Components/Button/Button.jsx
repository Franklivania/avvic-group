import React from 'react'
import { useNavigate } from 'react-router-dom'
const Button = ({link, title, className}) => {
    const navigate = useNavigate()

    function handleClick(){
        navigate(link)
    }

  return (
    <button type='button' onClick={handleClick} className={className}>
        {title}
    </button>
  )
}

export default Button