import React from "react"
import { Link } from "gatsby"
import { StorySectionStyles } from "./styles/StorySectionStyles"
import USAImage from "../images/made-in-usa.png"
import Image2 from "../images/sweeper2.png"
import Image3 from "../images/sweeper3.png"

const StorySection = () => {
  return (
    <StorySectionStyles>
      <div className="parallax">
        <div id="story-board"></div>
        <img src={USAImage} alt="made in usa" />
        <h1>
          Outstanding<span> QUALITY</span> and
          <span> DURABILITY</span>
        </h1>
      </div>
    </StorySectionStyles>
  )
}

export default StorySection
