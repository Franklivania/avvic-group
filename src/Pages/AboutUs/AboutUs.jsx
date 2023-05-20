import React from 'react'
import './AboutUs.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AboutHero from '../../Components/AboutUs Components/Hero/AboutHero'
import AboutScope from '../../Components/AboutUs Components/AboutScope/AboutScope'

const AboutUs = () => {
  return (
    <div className='about'>
        <Navbar />

        <AboutHero />

        <AboutScope />

        <Footer />
    </div>
  )
}

export default AboutUs