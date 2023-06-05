import React from 'react'
import './Acheivement.scss'
import achievement from '../../Data/Achievement.json'
import { Fade } from 'react-awesome-reveal'

const Acheivement = () => {
  return (
    <div id='acheivement'>
        
        <div id="left">
            <h2>OUR FOOTPRINT</h2>

            <span>
                <i className='fa-solid fa-database'></i>
                
                <br />

                8

                <p>Industries impacted</p>
            </span>

            <span>
                <i className='fa-solid fa-users'></i>
                
                <br />

                99%

                <p>Satisfied Clients</p>
            </span>

            <span>
                <i class="fa-solid fa-arrow-up-short-wide"></i>                
                
                <br />

                17

                <p>Milestones Achieved</p>
            </span>
        </div>

        <div id="right">
            {achievement.map((item, index) => (
                <div key={index} id='content'>
                    <Fade damping={5} direction='right'>
                        <i className={item.icon}></i>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </Fade>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Acheivement