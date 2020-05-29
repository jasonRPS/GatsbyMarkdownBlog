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
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
          </div>
        </div>
      </div>
    </CategorySectionStyles>
  )
}

export default CategorySection
