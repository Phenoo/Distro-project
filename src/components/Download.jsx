import Img1 from '../assets/girl.jpg'
import DownButton from './DownButton'


const Download = () => {
  return (
    <div className="full download" id="download">
      <section >
        <div className="download-container grid">
          <div className="google-link">
            <h4 className="headline">
            Download Distro App On Google Play & Apple Store
            </h4>
            <p>
            Distro opens a variety of options to its customers, making deliveries easier and faster. The app gives access to a variety of delivery services such as bikes, cars, trucks
            </p>
            <DownButton />
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