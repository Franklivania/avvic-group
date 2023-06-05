import React from 'react'
import { Link } from 'react-scroll'

const SectionButton = ({image, text, title, className, to, onClick}) => {
  return (
    <Link className={className} to={to} duration={500} smooth={true} spy={true} onClick={onClick}>
        {text}
        <img src={image} alt="" title={title}/>
    </Link>
  )
}

export default SectionButton