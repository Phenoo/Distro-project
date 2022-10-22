import Img from '../assets/phone.jpg'

const Home = () => {
  return (
    <section id="home">
      <div className="home">
          <div className="home-text">
            <h2>
              The most versatile and efficient logistics service in Nigeria.
            </h2>
            <p>
              Distro opens a variety of options to its customers, making deliveries easier and faster. The app gives access to a variety of delivery services such as bikes, cars, trucks.
            </p>
            <button className="btn">
              get started
            </button>
          </div>
          <div className="home-image">
            <img src={Img} alt="home" />
          </div>
      </div>
    </section>

  )
}

export default Home