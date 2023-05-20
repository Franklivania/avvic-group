import React from 'react'
import './AboutHero.scss'
import 'animate.css'
import mouse from '../../../assets/mouse.png'
import SectionButton from '../../SectionButton/SectionButton'

const AboutHero = () => {
  return (
    <div id='hero'>
        <h1>ABOUT US</h1>

        <SectionButton 
            className={'mouse animate__animated animate__bounce animate__infinite animate__slow'} 
            image={mouse} 
            to={'aboutScope'}
          />
    </div>
  )
}

export default AboutHero