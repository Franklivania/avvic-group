import React from 'react'
import './AboutHero.scss'
import 'animate.css'
import aboutimg from '../../../assets/aboutimg.png'

const AboutHero = () => {
  return (
    <div id='heros'>
      <img src={aboutimg} alt="" />
        <h1>ABOUT US</h1>
    </div>
  )
}

export default AboutHero