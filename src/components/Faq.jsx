import React, { useState } from 'react'
import Accordion from './Accordion'


const data = [
  {
    id: 1,
    title: 'Tell me more about Distro Logistics ?',
    answer: 'Distro opens a variety of options to its customers, making deliveries easier and faster. The app gives access to a variety of delivery services such as bikes, cars, trucks.  Our app is more than just food deliveries but offers home delivery services, deliveringanything you could possibly deliver.',
  },
  {
    id: 2,
    title: 'Who is liable to use it?',
    answer: 'The entire public. From businesses to Individuals to corporate bodies, who require logistics services within the cities of operation.'
  },
  {
    id: 3,
    title: 'How do I see the charges for my delivery service ?',
    answer: `Charges are automatically calculated by the system once all information regards the request has been provided.`
  },
  {
    id: 5,
    title: 'How do I track my order ? ',
    answer: `You can track an order by clicking on the “Track Shipment” option on the menu.`
  },
  {
    id: 4,
    title: 'What are the payment options for a service ?',
    answer: `
    A user is allowed to choose either to pay on delivery or pay with a credit card on the app.
    `
  },
  {
    id: 6,
    title: 'Can a single user make multiple orders at a time ?',
    answer: `Yes. A user can make multiple orders and track their individual progress.`
  },
]

const Faq = () => {
  const [ask, setAsk] = useState(data)

  return (
    <div className="faq" id="faq">
      <section>
        <div className="center">
          <h6 className="tophead">
          GET YOUR QUESTION ANSWER
          </h6>
          <h4 className="headline">
          Frequently Asked Questions
          </h4>
          <div className="divider"></div>
        </div>
        <ul className='faq-container'>
        {
            ask.map((question)  => {
              return <Accordion key={question.id} {...question} set={setAsk} />
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Faq