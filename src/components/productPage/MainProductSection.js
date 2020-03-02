import React, { useState } from "react"
import { MainProductSectionStyles } from "./styles/MainProductSectionStyles"
import ImageGalleryModal from "./ImageGalleryModal"
import YuoBeJudgeModal from "./YouBeJudgeModal"

import MadeInUSAImage from "../../images/hand-made.jpg"
import GalleryImage from "../../images/fc-image3.jpg"
import UnderHoodImage from "../../images/under-the-hood.jpg"
import CompareImage from "../../images/judge.jpg"
import MainMachineImage from "../../images/mini-hd-test-usa.jpg"

const MainProductSection = props => {
  const [modalImageDisplay, setImageModal] = useState("none")
  const [modalHoodDisplay, setHoodModal] = useState("none")
  const [modalJudgeDisplay, setJudgeModal] = useState("none")
  // const [modalImageDisplay, setImageModal] = useState("none")

  function openImageModal() {
    setImageModal("block")
  }

  function openHoodModal() {
    setHoodModal("block")
  }

  function openJudgeModal() {
    setJudgeModal("block")
  }

  function closeModal() {
    setImageModal("none")
    setHoodModal("none")
    setJudgeModal("none")
  }

  return (
    <MainProductSectionStyles>
      <ImageGalleryModal
        modalImageDisplay={modalImageDisplay}
        closeModal={closeModal}
      />
      <YuoBeJudgeModal
        modalHoodDisplay={modalHoodDisplay}
        closeModal={closeModal}
      />
      <div id="container">
        <div id="thumbnail-image-container">
          <div id="thumbnails">
            <div onClick={openImageModal} className="thumbnail-link">
              <img src={CompareImage} />
              <p>You be the judge</p>
            </div>
            <div onClick={openHoodModal} className="thumbnail-link">
              <img src={UnderHoodImage} />
              <p>Videos</p>
            </div>
            <div className="thumbnail-link">
              <img src={CompareImage} />
              <p>Machine images</p>
            </div>
            <div className="thumbnail-link">
              <img src={GalleryImage} />
              <p>Application</p>
            </div>
          </div>
          <div className="main-image">
            <img src={MainMachineImage} alt={props.alt} />
          </div>
        </div>
        <div id="product-details">
          <h1>{props.title}</h1>
          <p>{props.details}</p>
          <h2>Two Scrub Systems to Choose From</h2>
          <div className="scrubber-thumbnails">
            <div className="deck-link-container">
              <img src={props.scrubImage} alt={props.alt} />
              <p>Disk Benefits</p>
            </div>
            <div className="deck-link-container">
              <img src={props.scrubImage2} alt={props.alt} />
              <p>Cylindrical Benefits</p>
            </div>
          </div>
        </div>
      </div>
    </MainProductSectionStyles>
  )
}

export default MainProductSection
