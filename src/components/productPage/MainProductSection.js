import React, { useState } from "react"
import { MainProductSectionStyles } from "./styles/MainProductSectionStyles"
import ImageGalleryModal from "./ImageGalleryModal"
import MadeInUSAImage from "../../images/hand-made.jpg"

import GalleryImage from "../../images/fc-image3.jpg"
import UnderHoodImage from "../../images/under-the-hood.jpg"
import CompareImage from "../../images/judge.jpg"

const MainProductSection = props => {
  const [modalDisplay, setModal] = useState("none")

  function openModal() {
    setModal("block")
  }

  function closeModal() {
    setModal("none")
  }

  return (
    <MainProductSectionStyles>
      <ImageGalleryModal modalDisplay={modalDisplay} closeModal={closeModal} />
      <div id="container">
        <div id="thumbnail-image-container">
          <div id="thumbnails">
            <div onClick={openModal} className="thumbnail-link">
              <img src={GalleryImage} />
              <p>Image Gallery</p>
            </div>
            <div className="thumbnail-link">
              <img src={UnderHoodImage} />
              <p>Under the Hood</p>
            </div>
            <div className="thumbnail-link">
              <img src={CompareImage} />
              <p>You be the Judge</p>
            </div>
            <div className="thumbnail-link">
              <img src={GalleryImage} />
            </div>
          </div>
          <div className="main-image">
            <img src={props.mainImage} alt={props.alt} />
            <img
              className="handMade"
              src={MadeInUSAImage}
              alt="hand made in usa"
            />
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
