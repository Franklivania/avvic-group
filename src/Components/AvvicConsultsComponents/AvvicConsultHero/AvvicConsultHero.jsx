import React from 'react'
import './AvvicConsultHero.scss'
import obioma from '../../../assets/obinna.jpg'


const AvvicConsultHero = () => {
  return (
    <div id='ac-hero'>

        <div className="ac-hero-side">
            <figure>
                <img src={obioma} alt="" />
            </figure>
            <span>
                <h2>Obioma Akpagbula </h2>
                <p>-Managing Director, Avvic Consult</p>
            </span>
        </div>

        <aside>
            <article>
                <h1>About Us</h1>

                <p>
                    AVVIC offers a robust portfolio of business management services to assist business owners and leaders manage vital business processes in a result driven and cost effective manner.
                </p>
            </article>

            <article>
                <h1>What We Do</h1>

                <p>
                    Our management team comprises of experts in sectors such as:
                </p>

                <ul>
                    <li>Finances</li>
                    <li>Technology</li>
                    <li>Analysis</li>
                    <li>Business Management</li>
                </ul>
            </article>
        </aside>
    </div>
  )
}

export default AvvicConsultHero