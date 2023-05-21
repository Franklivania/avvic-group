import React, {useEffect, useState} from 'react'
import './History.scss'
import otigba from '../../../assets/otigba.jpg'
import icon from '../../../assets/avvic_icon.png'

const History = () => {
  const [hist, setHist] = useState([])

  useEffect(() => {
    import('../../../Data/SubsHist.json')
    .then(data => {
      setHist(data.default.information)
    })
    .catch(error => {
      console.log('Error getting information', error)
    })
  }, [])

  return (
    <div id='history'>
      <>  
          <img src={otigba} alt={"Otigba Junction"} title={'Otigba Junction'} id='otigba' />

          <p>
              For over half a decade, Avvic Group, 
              through its founding flagship entity, 
              Avvic Consults, provided world class 
              services to a diverse array of industries. 
              The impressive growth in client service 
              engagements necessitated the incorporation 
              of a multi-service subsidiary structure to 
              host requisite collaborative synergies required 
              to deliver value to an increasing client base.
          </p>


          <p>
              Avvic Group is a 100% indigenous conglomerate that is strategically structured to provide high standard services by leveraging the combined experiences of its founding team which spans over three decades in finance, banking, management, IT, project management, hospitality, educational services, mining, and agriculture.
              The Group’s quantum leap, within a relatively short span of time, has been driven by the provision of best-in-class services. This service standard demand and continuous drive for excellence has catalysed the incorporation of the composite subsidiaries; Avvic Consult, Avvic Connect, Avvic Homes, Avvic Agro, Avvic Tech.
          </p>
      </>
      <span>
        <img src={icon} alt="" id='icon' />
        <p>SCROLL DOWN</p>
      </span>

      <div id="subs">
        {hist.map(items => (
          <div className="container" key={items.id}>
            <h2> <img src={items.icon} alt="" /> {items.title}</h2>
            <p>{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History