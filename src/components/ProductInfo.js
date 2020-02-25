import React, { Component } from "react"
import ImageSelector from "../components/ImageSelector"
import { ProductInfoStyles } from "./styles/ProductInfoStyles"
import TestImage1 from "../images/sweeper1.png"
import TestImage2 from "../images/sweeper2.png"
import TestImage3 from "../images/sweeper3.png"
import TestImage4 from "../images/sweeper1.png"
import CylindricalImage from "../images/30-inch-cylindrical-spin.png"
import DeckImage from "../images/260-30-inch-deck.png"

class ProductInfo extends Component {
  state = {
    imageStart: TestImage1,
    imageChange: TestImage1,

    showModal: "none",
    modalOpacity: "0",
  }

  changeImage = e => {
    e.preventDefault()
    this.setState({ imageChange: e.target.dataset.image })
  }

  openModal = e => {
    e.preventDefault()
    this.setState({ showModal: "block", modalOpacity: "1" })
  }

  closeModal = e => {
    e.preventDefault()
    this.setState({ showModal: "none", modalOpacity: "0" })
  }

  render() {
    return (
      <ProductInfoStyles>
        <div id="product-container">
          <div id="image-selector">
            <ImageSelector
              modalOpacity={this.modalOpacity}
              openModal={this.openModal}
              closeModal={this.closeModal}
              showModal={this.state.showModal}
              imageStart={this.state.imageStart}
              imageChange={this.state.imageChange}
              changeImage={this.changeImage}
              image1={TestImage1}
              image2={TestImage2}
              image3={TestImage3}
              image4={TestImage4}
            />
          </div>
          <div id="product-info">
            <h1>Mini HD Walk Behind Floor Scrubber</h1>
            <p>
              Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve
              made consistent cleaning and being budget conscious our top
              priorities while delivering a durable floor scrubber that will
              last for years. Maintain cleanliness in Warehouses, Fitness
              Facilities, Fabrication Shops, and other applications. The scrub
              brushes are installed and removed without tools to allow ease when
              switching between application’s needs. The squeegee blades can be
              rotated or flipped without tools. Ensure complete cleaning in a
              variety of sized applications with a reliable scrubber.
            </p>
            <h2>Two Scrub Systems to Choose From</h2>
            <div id="disk-selection-images">
              <img src={CylindricalImage} />
              <img src={DeckImage} />
            </div>
          </div>
        </div>
      </ProductInfoStyles>
    )
  }
}

export default ProductInfo
