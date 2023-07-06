import React from 'react'
import './AvvicTech.scss'
import hero from '../../assets/techimg.png'
import up from '../../assets/up.png'
import SectionButton from '../../Components/SectionButton/SectionButton'
import AvvicTechHero from '../../Components/AvvicTechComponents/AvvicTechHero/AvvicTechHero'
import Navbar from '../../Components/Navbar/Navbar'
import AvvicTechOffers from '../../Components/AvvicTechComponents/AvvicTechOffers/AvvicTechOffers'
import Footer from '../../Components/Footer/Footer'

const AvvicTech = () => {
  return (
    <div id='tech'>
        <Navbar />

        <div id="tech-hero">
            <img src={hero} alt="" />
            <h1>AVVIC Tech</h1>
        </div>

        <AvvicTechHero />

        <AvvicTechOffers />

        <Footer />

        <SectionButton to={'tech-hero'} className={'tech-btn'} image={up}/>
    </div>
  )
}

export default AvvicTech