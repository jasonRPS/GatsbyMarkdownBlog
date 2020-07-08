import React from "react"
import styled from "styled-components"
import { StyledThumbs, StyledMainMedia } from "./FeaturedProductStyles"
import CylindricalThumb1Image from "../images/mini-hd-cylindrical-thumb1.jpg"
import CylindricalThumb2Image from "../images/mini-hd-cylindrical-thumb2.jpg"
import CylindricalThumb3Image from "../images/mini-hd-cylindrical-thumb3.jpg"
import CylindricalThumb4Image from "../images/mini-hd-cylindrical-thumb4.jpg"
import CylindricalThumb5Image from "../images/mini-hd-cylindrical-thumb5.jpg"
import CylindricalMain1Image from "../images/mini-hd-cylindrical-main1.jpg"

const ImageContainer = styled.div`
  display: flex;
`

const ImageCarousel = props => {
  return (
    <ImageContainer>
      <StyledThumbs>
        <div className="thumbnail">
          <img src={CylindricalThumb1Image} alt="" />
        </div>
        <div className="thumbnail">
          <img src={CylindricalThumb2Image} alt="" />
        </div>
        <div className="thumbnail">
          <img src={CylindricalThumb3Image} alt="" />
        </div>
        <div className="thumbnail">
          <img src={CylindricalThumb4Image} alt="" />
        </div>
        <div className="thumbnail">
          <img src={CylindricalThumb5Image} alt="" />
        </div>
        <div className="thumbnail">
          <i className="fab fa-youtube"></i>
        </div>
      </StyledThumbs>
      <StyledMainMedia>
        <div className="main-media-container">
          <img src={CylindricalMain1Image} alt="" />
        </div>
      </StyledMainMedia>
    </ImageContainer>
  )
}

export default ImageCarousel
