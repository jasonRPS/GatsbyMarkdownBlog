import React from "react"
import { Link } from "gatsby"
import { CategorySectionStyles } from "./styles/CategorySectionStyles"
import Image1 from "../images/mini-hd-26d-1.png"
import Image2 from "../images/34-1.png"
import Image3 from "../images/sweeper3.png"

const CategorySection = () => {
  return (
    <CategorySectionStyles>
      <div className="parallax">
        <h1>
          Outstanding<span> QUALITY</span> and
          <span> DURABILITY</span>
        </h1>
        <div id="machine-container">
          <div id="product-container">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/walk-behind-floor-scrubbers"
            >
              <div className="machine-selection">
                <img src={Image1} />
                <p>Walk Behind Scrubbers</p>
              </div>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/walk-behind-floor-sweepers"
            >
              <div className="machine-selection">
                <img src={Image2} />
                <p>Walk Behind Sweepers</p>
              </div>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/ride-on-scrubbers"
            >
              <div className="machine-selection">
                <img src={Image1} />
                <p>Ride on Scrubbers</p>
              </div>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/ride-on-sweepers"
            >
              <div className="machine-selection">
                <img src={Image1} />
                <p>Ride on Sweepers</p>
              </div>
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/sweeper-scrubbers"
            >
              <div className="machine-selection">
                <img src={Image1} />
                <p>Sweeper Scrubber</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </CategorySectionStyles>
  )
}

export default CategorySection
