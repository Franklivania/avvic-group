import React from 'react'
import './Culture.scss'
import culture from '../../../Data/Culture.json'

const Culture = () => {
  return (
    <div id='culture'>
      {culture.map((cultures, index) => (
        <div className="container" key={index}>
          <h2>{cultures.title}</h2>
          <p>{cultures.text}</p>

          <ul content='un-editable'>
            {cultures.listitems.map((items, idx) => (
              <li key={idx}>{items.list}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Culture