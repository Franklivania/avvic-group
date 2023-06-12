import React from 'react'
import './AvvicConnectHero.scss'
import sammy from '../../../assets/sammy.jpg'

const AvvicConnectHero = () => {
  return (
    <div id='acn-hero'>
        <div className="acn-hero-side">
            <figure>
                <img src={sammy} alt="" />
            </figure>
            <span>
                <h2>Samuel Oseafiana</h2>
                <p>-Managing Director, Avvic Connect</p>
            </span>
        </div>

        <aside>
            <h1>About Us</h1>

            <p>
                Avvic Connect is an integrated financial consultancy and advisory services company. It offers unbundled financial consultancy services through strategic inter-industry partnerships, fitted to meet specific client needs in different sectors.
                A member of the Avvic Group, Avvic Connect was incorporated in 2021 to deliver creative, innovative, and value-driven business and financial solutions leveraging technology.
            </p>
        </aside>
    </div>
  )
}

export default AvvicConnectHero