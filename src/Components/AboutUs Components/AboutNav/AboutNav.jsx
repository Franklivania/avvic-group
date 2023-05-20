import React, { useState } from 'react'
import './AboutNav.scss'
import { Link } from 'react-router-dom'

const AboutNav = ({className}) => {
    const [dropdown, setDropdown] = useState(false)

    function handleClick(){
        setDropdown(!dropdown)
    }

  return (
    <div id='aboutNav' className={className}>
        <NavLink link={''} title={"ABOUT US"}/>
        <NavLink title={"LEADERSHIP"} onClick={handleClick}>
            {dropdown && (
                <div className="items">
                    <NavSubLinks title={"BOD"}/>
                    <NavSubLinks title={"HOP"}/>
                    <NavSubLinks title={"MT"}/>
                </div>
            )}
        </NavLink>
        <NavLink link={''} title={"HISTORY"}/>
        <NavLink link={''} title={"CULTURE"}/>
    </div>
  )
}

function NavLink({link, title, onClick, children}){
    return (
        <Link to={link} onClick={onClick} className='link'>
            {title}
            {children}
        </Link>
    )
}

function NavSubLinks(link, title, onClick){
    return(
        <Link to={link} onClick={onClick} className='link'>
            {title}
        </Link>
    )
}

export default AboutNav