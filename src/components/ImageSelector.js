import React from "react"
import { ImageSelectorStyles } from "./styles/ImageSelectorStyles"

const ImageSelector = props => {
  return (
    <ImageSelectorStyles>
      <div id="container">
        <div className="thumbnails">
          <div onClick={props.changeImage} className="thumbnail-data">
            <img src={props.image1} alt={props.alt} data-image={props.image1} />
          </div>
          <div onClick={props.changeImage} className="thumbnail-data">
            <img src={props.image2} alt={props.alt} data-image={props.image2} />
          </div>
          <div onClick={props.changeImage} className="thumbnail-data">
            <img src={props.image3} alt={props.alt} data-image={props.image3} />
          </div>
          <div onClick={props.changeImage} className="thumbnail-data">
            <img src={props.image4} alt={props.alt} data-image={props.image4} />
          </div>
          <p>View More</p>
        </div>
        <div className="large-image">
          <img src={props.imageChange} alt={props.alt} />
        </div>
      </div>
    </ImageSelectorStyles>
  )
}

export default ImageSelector
