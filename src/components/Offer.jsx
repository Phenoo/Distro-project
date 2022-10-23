
import Img1 from '../assets/undraw_Destination_re_sr74.png'
import Img2 from '../assets/undraw_City_driver_re_9xyv.png'
import Img3 from '../assets/undraw_navigator_a479.png'
import Img4 from '../assets/undraw_tourist_map_re_293e (1).png'
import Img5 from '../assets/undraw_reviews_lp8w.png'
import Img6 from '../assets/undraw_Download_re_li50.png'
import Img7 from '../assets/undraw_delivery_truck_vt6p.png'
import Img8 from '../assets/undraw_Credit_card_re_blml.png'

const Offer = () => {
  const items = [{
    id: 1,
    image: Img6 ,
    text: 'Sign up on the app, filling in your personal details',
    name: 'A rider opens the app'

  },
  {
    id: 2,
    image: Img2 ,
    text: 'Carefully enter pickup details, including item description, providing as much information as possible.',
    name: 'A rider is matched with a driver'
  },
  {
    id: 3,
    image: Img3 ,
    text: 'Hop between transport means and choose the one that suites your needs best for that service.',
    name: 'The driver picks up the rider'
  },
  {
    id: 4,
    image: Img7 ,
    text: 'Place your distro service order to be delivered at a designated location, be sure to provide easy landmarks.',
    name: 'The driver takes the rider to the destination'
  },
  {
    id: 5,
    image: Img4 ,
    text: 'The system carefully analyzes your request and provides you the service bill. ',
    name: 'The driver and rider leave ratings and reviews'
  },
  {
    id: 6,
    image: Img8 ,
    text: 'Using your bank card, you can finalize your payment for the delivery service. ',
    name: 'The driver and rider leave ratings and reviews'
  },
  {
    id: 7,
    image: Img1 ,
    text: 'Track your order from  the bottom bar and the progress of your delivery service. ',
    name: 'The driver and rider leave ratings and reviews'
  },
  {
    id: 8,
    image: Img5 ,
    text: 'Distro App also allows to communicate with the customer service whatsapp channel.',
    name: 'The driver and rider leave ratings and reviews'
  },
]
  return (
    <div className='offer' id='features'>
      <section className='offer-container'>
        <div className="center">
          <h6 className="tophead">
            whats the function
          </h6>
          <h4 className='headline'>
            how to use the distro app
          </h4>
        <div className="divider"></div>
        </div>
          <div className='offer-grid'>
            {
              items.map(item => {
                const { text, id, image} = item
                return (
                  <article className="offer-item" key={id}>
                    <div className="image">
                      <img src={image} alt="offer" />
                    </div>
                    <div className="text">
                      <h6>step {id}</h6>
                      <p>
                        {text}
                      </p>
                    </div>
                  </article>
                )
              })
            }
          </div>
      </section>
    </div>
  )
}

export default Offer