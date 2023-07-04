import './ContactUs.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactMedia from '../../Components/ContactMedia/ContactMedia'
import icon from '../../assets/avvic_icon.png'
import contactimg from '../../assets/contactimg.jpg'


const ContactUs = () => {
  return (
    <div id='contact'>
        <Navbar />

        <div id="contact-hero">
            <img src={contactimg} alt="" />
            <h1>CONTACT US</h1>
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