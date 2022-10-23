import Img from '../assets/phone.jpg'

const Home = () => {
  return (
    <section id="home">
      <div className="home">
          <div className="home-text">
            <h2>
              The most versatile and efficient logistics service in Nigeria.
            </h2>
            <div className="moto">
              <ul>
                <li>
                  <h6>Effective Pricing</h6>
                </li>
                <li>
                  <h6>Efficient Tracking</h6>
                </li>
                <li>
                  <h6>Professional Service.</h6>
                </li>
              </ul>
            </div>
          
            <button className="btn">
              get started
            </button>
            <p>
              Current Active Location:  <strong> Lagos, Nigeria.</strong>
            </p>
          </div>
          <div className="home-image">
            <img src={Img} alt="home" />
          </div>
      </div>
    </section>

  )
}

export default Home