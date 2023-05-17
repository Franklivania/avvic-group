import React from 'react'
import './Hero.scss'
import 'animate.css'
import bridge from '../../assets/bridge.mp4'
import mouse from '../../assets/mouse.png'
import Button from '../Button/Button'
import SectionButton from '../SectionButton/SectionButton'
import { Fade } from 'react-awesome-reveal'

const Hero = ({className}) => {
  return (
    <div className={className} id='hero'>
        <video autoPlay muted loop>
          <source src={bridge} type='video/mp4'/>
        </video>

        <section>
          <Fade delay={0.5} direction='up' damping={0.2}>
            <h1>
              Proviving Technological, Financial, and Business
              solutions for value chains
            </h1>
            <Button 
              title={"BOOK WITH US"}
              className={'btn'}
            />
          </ Fade>

          <SectionButton 
            className={'mouse animate__animated animate__bounce animate__infinite animate__slow'} 
            image={mouse} 
            to={'scope'}
          />        
        </section>
    </div>
  )
}

export default Hero