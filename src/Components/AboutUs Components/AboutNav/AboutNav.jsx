import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import './AboutNav.scss'
import'animate.css'
import { Link } from 'react-router-dom'

const AboutNav = ({ className }) => {
  const [activeLink, setActiveLink] = useState(null)
  const [activeDropLink, setActiveDropLink] = useState(null)
  const [open, setOpen] = useState(false)

  function handleClick(link) {
    if (activeLink === link) {
      setActiveLink(null);
    } else {
      setActiveLink(link);
    }
  }

  function handleOpen(){
    setOpen(!open)
  }
  

  return (
    <div id='aboutNav' className={className}>
        <button type='button' id='open' onClick={handleOpen}>
            <i className={`fa-solid fa-${!open ? 'bars' : 'times'} fa-2x`}></i>
        </button>
        {open && (
            <div className='list animate__animated'>
                <NavLink link={''} title={"ABOUT US"} active={activeLink === null} onClick={() => handleClick(null)} />
                <NavLink link={null} title={"LEADERSHIP"} active={activeLink === 'leadership'} onClick={() => handleClick('leadership')}>
                    <i className='fa-solid fa-caret-down'></i>
                    {activeLink === 'leadership' && (
                        <div className="items">
                        <NavSubLinks link={''} title={"BOARD OF DIRECTORS"} active={activeDropLink === 'bod'} onClick={() => handleClick('bod')} />
                        <NavSubLinks link={''} title={"HEAD OF PORTFOLIOS"} active={activeDropLink === 'hop'} onClick={() => handleClick('hop')} />
                        <NavSubLinks link={''} title={"MANAGEMENT TEAM"} active={activeDropLink === 'mt'} onClick={() => handleClick('mt')} />
                    </div>
                    )}
                </NavLink>
                <NavLink link={''} title={"HISTORY"} active={activeLink === 'history'} onClick={() => handleClick('history')} />
                <NavLink link={''} title={"CULTURE"} active={activeLink === 'culture'} onClick={() => handleClick('culture')} />
            </div>
        )}
    </div>
  )
}

function NavLink({ link, title, active, onClick, children }) {
  return (
    <Link to={link} onClick={onClick} className={`link ${active ? 'active' : ''}`}>
      {title}
      {children}
    </Link>
  )
}

function NavSubLinks({ link, title, active, onClick }) {
  return (
    <Link to={link} onClick={onClick} className={`link ${active ? 'active' : ''}`}>
      {title}
    </Link>
  )
}

export default AboutNav
