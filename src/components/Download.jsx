import Img from '../assets/googlelogo.png'
import Img1 from '../assets/girl.jpg'

import {SiApple} from 'react-icons/si'

const Download = () => {
  return (
    <div className="full download" id="download">
      <section >
        <div className="download-container grid">
          <div className="google-link">
            <h4 className="headline">
            Download Distro On Google Play
            </h4>
            <p>
              Distro opens a variety of options to its customers, making deliveries easier and faster. The app gives access to a variety of delivery services such as bikes, cars, trucks
            </p>
            <div className="flex">
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.courierx">
                  <img src={Img} alt="logo" />
                </a>
              </div>
              <div>
                <button className='app-icon'> 
                  <div>
                    <SiApple />
                  </div>
                  <div>
                    <span style={{textTransform: 'uppercase', fontSize: '8px'}}>
                      download on 
                    </span>
                    <span style={{textTransform: 'capitalize'}}>app store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={Img1} alt="girl" />
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Download