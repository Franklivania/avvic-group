import React from 'react'
import './Scope.scss'
import agro from '../../assets/agro.jpeg'
import connect from '../../assets/connect.jpg'
import consult from '../../assets/consult.jpg'
import tech from '../../assets/tech.jpg'

const Scope = ({className}) => {
    const slides = [
        {
            id: 1,
            className: "agro",
            image: agro
        },
        {
            id: 2,
            className: "connect",
            image: connect
        },
        {
            id: 3,
            className: "consult",
            image: consult
        },
        {
            id: 4,
            className: "tech",
            image: tech
        },
        {
            id: 5,
            className: "agro",
            image: agro
        }
    ]

  return (
    <div className={className} id='scope'>
        {slides.map((slide, index) => (
            <div className="slides">
                <img src={slide.image} alt="" />
                <article className={slide.className}>
                    
                </article>
            </div>
        ))}
    </div>
  )
}

export default Scope