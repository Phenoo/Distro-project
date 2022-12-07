
import Img3 from '../assets/undraw_navigator_a479.png'
import Img4 from '../assets/undraw_tourist_map_re_293e (1).png'
import Img6 from '../assets/undraw_Download_re_li50.png'
import Img7 from '../assets/undraw_delivery_truck_vt6p.png'
import Img8 from '../assets/undraw_Credit_card_re_blml.png'

const Offer = () => {
  const items = [{
    id: 1,
    image: Img6 ,
    text: 'Sign up on the app, filling in your personal details',

  },
  {
    id: 2,
    image: Img3,
    text: 'Carefully enter pickup details, including item description, providing as much information as possible.',
  },
  {
    id: 3,
    image: Img4 ,
    text: 'The system carefully analyzes your request and generate the services bill. Payment can be made with cash or debit. ',
  },
  {
    id: 4,
    image: Img8 ,
    text: 'Order tracking is enabled at the end of the bottom  corner of the app tp provide details on the progress of the delivery. The App also allows communication with customer via whatsapp'
  },
  {
    id: 5,
    image: Img7 ,
    text: 'Upon delivery, a rating system and comment section is available to the customer for feedback purposes.'
  },
]
  return (
    <div className='offer' id='features'>
      <section className='offer-container'>
        <div className="center">
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