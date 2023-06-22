import React from 'react'
import './AvvicConnect.scss'
import hero from '../../assets/connectimg.png'
import up from '../../assets/up.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SectionButton from '../../Components/SectionButton/SectionButton'
import AvvicConnectHero from '../../Components/AvvicConnectComponents/AvvicConnectHero/AvvicConnectHero'
import AvvicConnectOffers from '../../Components/AvvicConnectComponents/AvvicConnectOffers/AvvicConnectOffers'

const AvvicConnect = () => {
  return (
    <div id='connect'>
        <Navbar />

        <div id="connect-hero">
            <img src={hero} alt="" />
            <h1>AVVIC <br /> CONNECT</h1>
        </div>

        <AvvicConnectHero />

        <AvvicConnectOffers />

        <Footer />

        <SectionButton to={'connect-hero'} className={'connect-btn'} image={up}/>
    </div>
  )
}

export default AvvicConnect