import React from 'react'
import './AvvicTechOffers.scss'
import data from '../../../Data/AvvicTech.json'

const AvvicTechOffers = () => {
  return (
    <div id='at-offers'>
        <h1>Our Services</h1>

        {data.map((items, index) => (
            <div className={items.id % 2 === 0 ? 'even-id' : 'odd-id'} key={items.id}>
                <img src={items.image} alt={items.title} />
                <span>
                    <h2>{items.title}</h2>
                    <p>{items.text}</p>
                </span>
            </div>
        ))}
    </div>
  )
}

export default AvvicTechOffers