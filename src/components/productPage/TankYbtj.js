import React from "react"
import { TankYbtjStyles } from "./styles/TankYbtjStyles"

import TankLargeImage from "../../images/ybtj-tank.jpg"
import TankSmallImage from "../../images/tank-ybtj-close.jpg"

const TankYbtj = () => {
  return (
    <TankYbtjStyles>
      <div id="tank-container">
        <p style={{ width: "600px", marginLeft: "50px" }}>
          This <span style={{ fontWeight: "bold" }}>Mini-HD</span> tank features
          Clam Shell Tip-Back Tank designs as well as a Front Solution Fill
          System that provides multiple benefits
        </p>
        <div className="tank-main-image">
          <img src={TankLargeImage} alt="" />
          <div className="blue-target-container-1">
            <div className="second-inner">1</div>
          </div>
          <div className="blue-target-container-2">
            <div className="second-inner">2</div>
          </div>
          <div className="blue-target-container-3">
            <div className="second-inner">3</div>
          </div>
          <div className="info-1">
            <p>Easy rinsing of the Recovery Tank after use.</p>
          </div>
          <div className="info-2">
            <p>Easy access to components for serviceability.</p>
          </div>
          <div className="info-3">
            <p>
              Doesn't bolt directly to the frame so it's less likely to be
              damaged or risk stripping inserts.
            </p>
          </div>
        </div>
        <div className="tank-small-image">
          <img src={TankSmallImage} alt="" />
          <div className="blue-target-container-4">
            <div className="second-inner">4</div>
          </div>
          <div className="info-4">
            <p>Removable Screen Inlet.</p>
          </div>
          <div className="blue-target-container-5">
            <div className="second-inner">5</div>
          </div>
          <div className="info-5">
            <p>Retractable Faucet Hose.</p>
          </div>
        </div>
      </div>
    </TankYbtjStyles>
  )
}

export default TankYbtj
