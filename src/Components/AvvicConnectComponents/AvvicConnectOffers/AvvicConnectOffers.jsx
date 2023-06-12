import React from 'react'
import './AvvicConnectOffers.scss'
import data from '../../../Data/AvvicConnect.json'

const AvvicConnectOffers = () => {
  return (
    <div id='acn-offers'>
        {data.map((items, index) => (
            <div className={items.id % 2 === 0 ? 'even-id' : 'odd-id'} key={index}>
                <img src={items.image} alt="" />
                <span>
                    <h2>{items.title}</h2>
                    <p>{items.text}</p>
                </span>
            </div>
        ))}
    </div>
  )
}

export default AvvicConnectOffers