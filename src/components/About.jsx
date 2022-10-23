import React from 'react'
import Img1 from '../assets/undraw_Deliveries_2r4y.png'

const About = () => {
  return (
    <section id='about'>
      <div className="center">
        <h4 className="headline">
          about distro
        </h4>
        <div className="divider"></div>
      </div>
      <div className="grid about-grid">
        <div>
          <p>
                Distro opens a variety of options to its customers, making deliveries easier and faster. The app gives access to a variety of delivery services such as bikes, cars, trucks.
          </p>
          <br />
          <p>
            Our app is more than just food deliveries but offers home delivery services, delivering
            anything you could possibly deliver.
          </p>
        </div>
        <img src={Img1} alt="about" />
        </div>
    </section>
  )
}

export default About