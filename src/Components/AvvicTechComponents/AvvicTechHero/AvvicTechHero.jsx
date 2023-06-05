import React from 'react'
import './AvvicTechHero.scss'
import odera from '../../../assets/odera.jpeg'

const AvvicTechHero = () => {
  return (
    <div id='at-hero'>

        <figure>
            <img src={odera} alt="" />

            <figcaption>
                <h2>Odera Ogbodo</h2>
                <p>-Managing Director, Avvic Tech</p>
            </figcaption>
        </figure>

        <aside>
            <h1>About Us</h1>

            <p>
                Avvic Tech evolved from an in-house IT solutions entity, which provides critical IT backbone for the Group, to an independent subsidiary incorporated to extend its custom-built array of services to a broader client base. The subsidiary is a value-driven team of talented, highly-skilled, creative individuals who drive the organization’s IT solutions suite adapted for specific client projects and businesses.
                A member of the Avvic Group, Avvic Tech provides a tech platform that aggregates end to end solutions for a diverse set of industries and companies. It provides a suite of services that integrates data and database management, business analytics and intelligent technologies.
            </p>
        </aside>
    </div>
  )
}

export default AvvicTechHero