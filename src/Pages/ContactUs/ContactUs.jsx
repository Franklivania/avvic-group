import React from 'react'
import './ContactUs.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactMedia from '../../Components/ContactMedia/ContactMedia'
import SectionButton from '../../Components/SectionButton/SectionButton'
import mouse from '../../assets/mouse.png'
import icon from '../../assets/avvic_icon.png'

const ContactUs = () => {
  return (
    <div id='contact'>
        <Navbar />

        <div id="contact-hero">
            <h1>CONTACT US</h1>

            <SectionButton 
                className={'mouse animate__animated animate__bounce animate__infinite animate__slow'} 
                image={mouse} 
                to={'contact-container'}
            />
        </div>

        <div id="contact-container">
            <ContactMedia />

            <span>
                <img src={icon} alt="" />
            </span>

            <ContactForm />
        </div>


        <Footer />
    </div>
  )
}

export default ContactUs