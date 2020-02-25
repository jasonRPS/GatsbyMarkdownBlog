import React from "react"
import { MainProductSectionStyles } from "./styles/MainProductSectionStyles"

const MainProductSection = props => {
  return (
    <MainProductSectionStyles>
      <div id="container">
        <div id="thumbnail-image-container">
          <div id="thumbnails">
            <div className="thumbnail-link"></div>
            <div className="thumbnail-link"></div>
            <div className="thumbnail-link"></div>
            <div className="thumbnail-link"></div>
          </div>
          <div className="main-image">
            <img src={props.mainImage} alt={props.alt} />
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
