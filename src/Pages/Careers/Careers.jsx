import React from 'react'
import './Careers.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SectionButton from '../../Components/SectionButton/SectionButton'
import mouse from '../../assets/mouse.png'


const Careers = () => {
  return (
    <div id='careers'>
        <Navbar />

        <div id="career-hero">
            <h1>CAREERS</h1>

            <SectionButton 
                className={'mouse animate__animated animate__bounce animate__infinite animate__slow'} 
                image={mouse} 
                to={'career-container'}
            />
        </div>

        <div id="career-container">
            <div className="top">
                <aside>
                    <h1>CAREER DEVELOPMENT</h1>
                </aside>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Careers