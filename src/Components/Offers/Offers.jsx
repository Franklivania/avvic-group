import React from 'react'
import './Offers.scss'
import management from '../../assets/management.jpg'
import financial from '../../assets/financial.jpeg'
import analytics from '../../assets/analytics.jpg'
import strfocus from '../../assets/focus.jpg'

const Offers = ({className}) => {
    const display = [
        {
            id: 1,
            image: management,
            title: "MANAGEMENT",
            text: "AVVIC offers a robust portfolio of business management services to assist business owners and leaders manage vital business processes in a result-driven and cost-effective manner."
        },
        {
            id: 2,
            image: financial,
            title: "FINANCE",
            text: "We deploy the collective experience of our experts to provide creative financial solutions engineered to navigate your business through the headwinds of the 21st Century marketplace profitably."
        },
        {
            id: 3,
            image: analytics,
            title: "BUSINESS ANALYTICS",
            text: "We build relevant analytics, ground up, to help businesses build critical data and processes for marketplace dominance."
        },
        {
            id: 4,
            image: strfocus,
            title: "STRATEGIC FOCUS",
            text: "Value creation and maximization through innovative product and service delivery."
        },
    ]
  return (
    <div className={className} id='offers'>
        {display.map((items, index) => (
            <div className="content" key={items.id}>
                <img src={items.image} alt={items.title} />
                <article>
                    <h2>{items.title}</h2>
                    <p>{items.text}</p>
                </article>
            </div>
        ))}
    </div>
  )
}

export default Offers