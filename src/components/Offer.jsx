
import Img1 from '../assets/undraw_Destination_re_sr74.png'
import Img2 from '../assets/undraw_City_driver_re_9xyv.png'
import Img3 from '../assets/undraw_navigator_a479.png'
import Img4 from '../assets/undraw_tourist_map_re_293e (1).png'
import Img5 from '../assets/undraw_reviews_lp8w.png'


const Offer = () => {
  const items = [{
    id: 1,
    image: Img1 ,
    text: 'The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup.',
    name: 'A rider opens the app'

  },
  {
    id: 2,
    image: Img2 ,
    text: 'A nearby driver sees and chooses to accept the rider’s ride request. The rider is automatically notified when the driver’s vehicle is about a minute away.',
    name: 'A rider is matched with a driver'
  },
  {
    id: 3,
    image: Img3 ,
    text: 'The driver and the rider verify each other’s names and the destination. Then the driver starts the ride.',
    name: 'The driver picks up the rider'
  },
  {
    id: 4,
    image: Img4 ,
    text: 'The app gives the driver the option to access turn-by-turn directions.',
    name: 'The driver takes the rider to the destination'
  },
  {
    id: 5,
    image: Img5 ,
    text: 'At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders also have the option to give the driver compliments and a tip directly in the app.',
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
                const { text, id, name, image} = item
                return (
                  <article className="offer-item" key={id}>
                    <div className="image">
                      <img src={image} alt="offer" />
                    </div>
                    <div className="text">
                      <h6>step {id}</h6>
                      <h4>
                        {name}
                      </h4>
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