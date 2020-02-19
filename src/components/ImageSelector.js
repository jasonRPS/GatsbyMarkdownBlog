import React from "react"
import { ImageSelectorStyles } from "./styles/ImageSelectorStyles"
import ImageModal from "./ImageModal"

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
          <p
            onClick={props.openModal}
            style={{ fontWeight: "bold", color: "red" }}
          >
            View More
          </p>
        </div>
        <div className="large-image">
          <img src={props.imageChange} alt={props.alt} />
        </div>

        <ImageModal
          closeModal={props.closeModal}
          showModal={props.showModal}
          modalOpacity={props.modalOpacity}
        />
      </div>
    </ImageSelectorStyles>
  )
}

export default ImageSelector
