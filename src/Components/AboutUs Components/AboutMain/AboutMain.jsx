import React from 'react'
import './AboutMain.scss'
import profile from '../../../assets/abouthero1.jpg'

const AboutMain = () => {
  return (
    <div id='aboutMain'>
        <div className='container'>
            <p>
                Avvic Group is a Multi-Service Holding Company. 
                The Group, through its subsidiaries, provides a wide 
                array of products and services which span across several sectors; 
                Consultancy, Financial Services, IT, Educational Services, Agriculture, 
                and Real Estate Development. Avvic Group leads the subsidiaries and 
                provides collaborative synergies that drive value creation through 
                innovative products and service delivery.
            </p>
            {/* <figure>
                <img src={profile} alt="" />
            </figure> */}
        </div>
    </div>
  )
}

export default AboutMain