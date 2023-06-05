import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import 'animate.css/animate.min.css'
import logo from '../../assets/avvic_logo.png'
import Button from '../Button/Button'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    
    function handleToggle(){
        setOpen(prevOpen => !prevOpen);
    }
  return (
    <>
        <nav>
            <Link to='/'><img src={logo} alt={"avvic-logo"} /></Link>
            <Navigation />
            <Button 
                title={"CONTACT US"}
                link={`/contact`}
                className={'btn'}
            />
        </nav>

        <menu>
            <Link to='/'><img src={logo} alt={"avvic-logo"} /></Link>

            <button type='button' onClick={handleToggle} id='switch'>
                <i className={`fa-solid fa-${open ? 'times' : 'bars'} fa-3x`}></i>
            </button>
            { open &&
                <div className={`menu animate__animated ${open ? 'active' : ''}`}>
                    <Navigation />
                    <Button 
                        title={"CONTACT US"}
                        link={`/contact`}
                        className={'btn'}
                    />
                </div>
            }
        </menu>
    </>
  )
}

function Navigation () {
    const [activeIndex, setActiveIndex] = useState(null)

    function onMouseHover(){
        setActiveIndex(null)
    }

    return(
        <>
            <Navitems link={`/`} title={"HOME"}/>
            <Navitems link={`/about`} title={"ABOUT US"}/>
            <Navitems link={'#'} title={"SUBSIDIARIES"} onMouseEnter={() => setActiveIndex(1)} onMouseLeave={() => setActiveIndex(null)}>
                <i className='fa-solid fa-caret-down'></i>
                {activeIndex === 1 && (
                    <div className='dropdown'>
                        <NavContent link={`/consult`} title={"CONSULT"}/>
                        <NavContent link={`/connect`} title={"CONNECT"}/>
                        {/* <NavContent link={`/homes`} title={"HOMES"}/> */}
                        {/* <NavContent link={`/agro`} title={"AGRO"}/> */}
                        <NavContent link={`/tech`} title={"TECH"}/>
                    </div>
                )}
            </Navitems>
            <Navitems link={`#`} title={"MEDIA"} onMouseEnter={() => setActiveIndex(2)} onMouseLeave={() => setActiveIndex(null)}>
                <i className='fa-solid fa-caret-down'></i>
                {activeIndex === 2 && (
                    <div className='dropdown'>
                        <NavContent link={`/news`} title={"NEWS"}/>
                        <NavContent link={`/photos`} title={"PHOTOS"}/>
                        <NavContent link={`/videos`} title={"VIDEOS"}/>
                    </div>
                )}
            </Navitems>
            <Navitems link={`/careers`} title={"CAREERS"}/>
        </>
    )
}

function Navitems({title, link, children, onMouseEnter, onMouseLeave, isActive}){
    return(
        <Link to={link} className={`link ${isActive ? 'active' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {title}
            {children}
        </Link>
    )
}

function NavContent({link, title}){
    return(
        <Link to={link} className='link' id='link'>{title}</Link>
    )
}

export default Navbar