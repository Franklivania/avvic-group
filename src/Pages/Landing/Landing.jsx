import React from 'react'
import { Element, animateScroll as scroll } from 'react-scroll';
import './Landing.scss'
import arrow from '../../assets/up.png'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
// import Scope from '../../Components/Scope/Scope'
import SectionButton from '../../Components/SectionButton/SectionButton';
import InfoPanel from '../../Components/InfoPanel/InfoPanel';
// import Offers from '../../Components/Offers/Offers';
import Footer from '../../Components/Footer/Footer';
import Acheivement from '../../Components/Acheivement/Acheivement';

const Landing = () => {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='landing'>
        <Navbar />

        <Hero className={'section'}/>

        {/* <Scope className={'section'}/> */}

        <InfoPanel />

        <Acheivement />

        {/* <Offers /> */}

        <Footer />

        <SectionButton
          onClick={scrollToTop}
          image={arrow}
          className={'arrow'}
          title={"Go Up"}
        />
    </div>
  )
}

export default Landing