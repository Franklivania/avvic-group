import React from 'react'
import './AboutMain.scss'
import 'animate.css'
import Quotes from '../../Quotes/Quotes'

const AboutMain = () => {
  return (
    <div id='aboutMain'>
            <p>
                Avvic Group is a Multi-Service Holding Company. 
                The Group, through its subsidiaries, provides a wide 
                array of products and services which span across several sectors; 
                Consultancy, Financial Services, IT, Educational Services, Agriculture, 
                and Real Estate Development. Avvic Group leads the subsidiaries and 
                provides collaborative synergies that drive value creation through 
                innovative products and service delivery.
            </p>

        <Quotes className={"quote"}/>
    </div>
  )
}

export default AboutMain