import React from 'react'
import {FaBuilding, FaOilCan, FaIndustry, FaShoppingCart, FaCog, FaTree} from 'react-icons/fa'

const Sectors = () => {
  return (
    <div className="sectors" id="sectors">
      <section className="sector">
        <div className="center">
          <h6 className="tophead">
            core sectors
          </h6>
          <h4 className="headline">
            sectors we serve
          </h4>
          <div className="divider"></div>
          </div>
          <div className="sector-container">
            <div className="item">
              <span>
                <FaBuilding />
              </span>
              <h6>
                construction & mining
              </h6>
              <p>
                Distro, with the advantage of variety of transport vehicles, undertakes the movement of materials and equipment from where they originate to where the workforce needs them. Our end goal ensures materials and equipment arrive on time and undamaged.
              </p>
            </div>
            <div className="item">
              <span>
                <FaOilCan />
              </span>
              <h6>
                oil and gas
              </h6>
              <p>
                Distro provides transportation services for oil and gas shipments by road, providing our customers with the service they need to maximize the efficiency of their supply chains and boost competitiveness.
              </p>
            </div>
            <div className="item">
              <span>
                <FaIndustry />
              </span>
              <h6>
                healthcare
              </h6>
              <p>
                Distro also helps in healthcare industry with our fast and reliabe services.
              </p>
            </div>
            <div className="item">
              <span>
                <FaShoppingCart />
              </span>
              <h6>
                FMCG
              </h6>
              <p>
              Distro Service focuses on the efficiency and effective management concerning the transportation of daily usable goods from one point of origin to the point of consumption to meet the requirement of customers.
              </p>
            </div>
            <div className="item">
              <span>
                <FaCog />
              </span>
              <h6>
              Manufacturing
              </h6>
              <p>
                Distro functions to provide efficient customer service, offering logistics solutions for industrial manufacturers, throughout their local supply chains. "
              </p>
            </div>
            <div className="item">
              <span>
                <FaTree />
              </span>
              <h6>
                agriculture
              </h6>
              <p>
              Distro Services aims to ensure the optimal and continuous flow of agro-goods from manufacturers/suppliers to producers and, even, to all categories of local consumers possible in the sector.
              </p>
            </div>
          </div>
      </section>
    </div>
  )
}
export default Sectors