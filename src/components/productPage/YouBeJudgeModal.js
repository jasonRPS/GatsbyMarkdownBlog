import React, { useState } from "react"
import { YouBeTheJudgeStyles } from "./styles/YouBeTheJudgeStyles"

import YbtjTankImage from "../../images/ybtj-tank.jpg"
import RecoveryThumbNail from "../../images/recovery-tank-thumbnail.png"
import TireThumbnailImage from "../../images/tire-thumbnail.png"
import SteelThumbnailImage from "../../images/steel-thumbnail.png"
import CommandThumbnailImage from "../../images/command-thumbnail.png"
import SqueegeeThumbnailImage from "../../images/squugee-thumbnail.png"
import TankYbtj from "./TankYbtj"

import { If } from "rc-if-else"
import RecoveryYbtj from "./RecoveryYbtj"

const YuoBeJudgeModal = props => {
  const [isTanksVisible, setTanksVisibility] = useState(true)
  const [isRecoveryVisible, setRecoveryVisibility] = useState(false)
  const [isTiresVisible, setTiresVisibility] = useState(false)
  const [isSteelVisible, setSteelVisibility] = useState(false)
  const [isCommandVisible, setCommandVisibility] = useState(false)
  const [isSqueegeeVisible, setSqueegeeVisibility] = useState(false)

  function toggleTanksSections(e) {
    let sectionName = e.target.dataset.name

    if (sectionName === "tanks") {
      setTanksVisibility(true)
      setRecoveryVisibility(false)
    }

    if (sectionName === "recovery") {
      setTanksVisibility(false)
      setRecoveryVisibility(true)
    }
    // switch (sectionName) {
    //   case 1:
    //     if (sectionName === "tanks") {
    //       setTanksVisibility(true)
    //     } else setTanksVisibility(false)
    //     console.log(sectionName)
    //     break
    //   case 2:
    //     if (sectionName === "recovery") {
    //       setRecoveryVisibility(true)
    //     } else setRecoveryVisibility(false)
    // }

    // console.log(sectionName)
  }

  return (
    <YouBeTheJudgeStyles>
      <div style={{ display: props.modalJudgeDisplay }} id="judge-container">
        <div id="x-close">
          <i onClick={props.closeModal} className="fas fa-times-circle"></i>
        </div>
        <div className="ybtj-title">
          <h1>YOU BE THE JUDGE</h1>
        </div>
        <div id="judge-content">
          <div className="thumbnail-layout">
            <div
              className="thumbnail-container"
              onClick={toggleTanksSections}
              id="tanks"
              data-name="tanks"
            >
              <div className="thumbnail">
                <img
                  onClick={toggleTanksSections}
                  src={YbtjTankImage}
                  alt=""
                  data-name="tanks"
                />
              </div>
              <div data-name="tanks" className="thumbnail-label">
                <p data-name="tanks">Tanks</p>
              </div>
            </div>

            <div
              onClick={toggleTanksSections}
              value="recover"
              className="thumbnail-container"
              data-name="recovery"
            >
              <div className="thumbnail">
                <img data-name="recovery" src={RecoveryThumbNail} alt="" />
              </div>
              <div data-name="recovery" className="thumbnail-label">
                <p data-name="recovery">Recovery Tank</p>
              </div>
            </div>
            <div
              onClick={toggleTanksSections}
              data-name="tires"
              className="thumbnail-container"
            >
              <div data-name="tires" className="thumbnail">
                <img data-name="tires" src={TireThumbnailImage} alt="" />
              </div>
              <div data-name="tires" className="thumbnail-label">
                <p data-name="tires">Tires & Transaxle</p>
              </div>
            </div>
            <div
              onClick={toggleTanksSections}
              data-name="steel"
              className="thumbnail-container"
            >
              <div className="thumbnail" data-name="steel">
                <img data-name="steel" src={SteelThumbnailImage} alt="" />
              </div>
              <div className="thumbnail-label">
                <p data-name="steel">Steel Frame</p>
              </div>
            </div>
            <div
              onClick={toggleTanksSections}
              data-name="command"
              className="thumbnail-container"
            >
              <div data-name="command" className="thumbnail">
                <img data-name="command" src={CommandThumbnailImage} alt="" />
              </div>
              <div className="thumbnail-label">
                <p data-name="command">Central Command</p>
              </div>
            </div>
            <div
              onClick={toggleTanksSections}
              data-name="squeegee"
              className="thumbnail-container"
            >
              <div data-name="squeegee" className="thumbnail">
                <img data-name="squeegee" src={SqueegeeThumbnailImage} alt="" />
              </div>
              <div data-name="squeegee" className="thumbnail-label">
                <p data-name="squeegee">Squeegee</p>
              </div>
            </div>
          </div>

          <If condition={isTanksVisible}>
            <div id="tank-section" className="ybtj-widget-position">
              <TankYbtj />
            </div>
          </If>
          <If condition={isRecoveryVisible}>
            <div id="recovery-tank-section" className="ybtj-widget-position">
              <RecoveryYbtj />
            </div>
          </If>
          <If condition={isTiresVisible}>
            <div value="tires-section" className="ybtj-widget-position">
              <TankYbtj />
            </div>
          </If>
          <If condition={isSteelVisible}>
            <div value="steel-section" className="ybtj-widget-position">
              <TankYbtj />
            </div>
          </If>
          <If condition={isCommandVisible}>
            <div id="command-section" className="ybtj-widget-position">
              <TankYbtj />
            </div>
          </If>
          <If condition={isSqueegeeVisible}>
            <div id="squeegee-section" className="ybtj-widget-position">
              <TankYbtj />
            </div>
          </If>
        </div>
      </div>
    </YouBeTheJudgeStyles>
  )
}

export default YuoBeJudgeModal
