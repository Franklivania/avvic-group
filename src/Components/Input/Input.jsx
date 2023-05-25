import React from 'react'

const Input = ( {className, placeholder, type, value, children, name} ) => {
  return (
    <input className={className} placeholder={placeholder} type={type} children={children} value={value} name={name} />
  )
}

export default Input