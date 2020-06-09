import React from "react"
import { CategorySectionStyles } from "./styles/CategorySectionStyles"
import Image1 from "../images/sweeper1.png"
import Image2 from "../images/sweeper2.png"
import Image3 from "../images/sweeper3.png"

const CategorySection = () => {
  return (
    <CategorySectionStyles>
      <div className="parallax">
        <h1>
          Outstanding<span style={{ fontSize: "50px" }}> QUALITY</span> and
          <span style={{ fontSize: "50px" }}> DURABILITY</span>
        </h1>
        <div id="machine-container">
          <div id="product-container">
            <div className="machine-selection">
              <img src={Image1} />
              <p>Walk Behind Scrubbers</p>
            </div>
            <div className="machine-selection">
              <img src={Image2} />
              <p>Walk Behind Sweepers</p>
            </div>
            <div className="machine-selection">
              <img src={Image1} />
              <p>Ride on Scrubbers</p>
            </div>
            <div className="machine-selection">
              <img src={Image2} />
              <p>Ride on Sweepers</p>
            </div>
            <div className="machine-selection">
              <img src={Image1} />
              <p>Sweeper Scrubber</p>
            </div>
          </div>
        </div>
      </div>
    </CategorySectionStyles>
  )
}

export default CategorySection
