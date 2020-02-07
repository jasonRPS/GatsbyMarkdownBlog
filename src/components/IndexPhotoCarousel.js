import React, { Component } from "react"
import { IndexPhotoCarouselStyles } from "./styles/IndexPhotoCarouselStyles"
import TestImage from "../images/fc-image.jpg"
import TestImage2 from "../images/fc-image2.jpg"
import TestImage3 from "../images/fc-image3.jpg"
import TestImage4 from "../images/fc-image4.jpg"
import TestImage5 from "../images/fc-image5.jpg"

let slideImages = {
  slide1: TestImage,
  slide2: TestImage2,
  slide3: TestImage3,
  slide4: TestImage4,
  slide5: TestImage5,
}

class IndexPhotoCarousel extends Component {
  state = {
    imageChange: TestImage,
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ imageChange: e.target.dataset.image })
  }

  componentDidMount = () => {
    console.log(slideImages.slide1)
  }

  render() {
    return (
      <IndexPhotoCarouselStyles>
        <div id="photo-container">
          <div className="slide">
            <img src={this.state.imageChange} />
          </div>
          <div id="photo-info">Info</div>
        </div>

        <div id="photo-selector-container">
          <div
            onClick={this.handleChange}
            className="thumb-selector"
            data-image={TestImage}
          >
            Factory cat
          </div>
          <div
            onClick={this.handleChange}
            className="thumb-selector"
            data-image={TestImage2}
          >
            Personal Good Stuff
          </div>
          <div
            onClick={this.handleChange}
            className="thumb-selector"
            data-image={TestImage3}
          >
            Something else is great
          </div>
          <div
            onClick={this.handleChange}
            className="thumb-selector"
            data-image={TestImage4}
          >
            S-seris
          </div>
          <div
            onClick={this.handleChange}
            className="thumb-selector"
            data-image={TestImage5}
          >
            Cool stuff goes here
          </div>
        </div>
      </IndexPhotoCarouselStyles>
    )
  }
}

export default IndexPhotoCarousel
