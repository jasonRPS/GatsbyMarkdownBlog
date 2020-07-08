import React, { useState } from "react"
import styled from "styled-components"
import { StyledThumbs, StyledMainMedia } from "./FeaturedProductStyles"

import CylindricalMain1Image from "../images/mini-hd-cylindrical-main1.jpg"

const ImageContainer = styled.div`
  display: flex;
`

const ImageCarousel = props => {
  const [thumbnail, setThumbnail] = useState({
    thumb1: props.cylindricalThumb1,
    thumb2: props.cylindricalThumb2,
    thumb3: props.cylindricalThumb3,
    thumb4: props.cylindricalThumb4,
    thumb5: props.cylindricalThumb5,
  })

  const [mainImage, setMainImage] = useState({
    main1: props.cylindricalMain1,
    main2: props.cylindricalMain2,
    main3: props.cylindricalMain3,
    main4: props.cylindricalMain4,
    main5: props.cylindricalMain5,
  })

  const [mainImageRender, setMainImageRender] = useState(mainImage.main1)
  const [toggleMedia, setToggleMedia] = useState({
    displayImages: "block",
    displayVideo: "none",
  })

  function handleClick(e) {
    setMainImageRender(e.target.dataset.main)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
  }

  function handleVideoToggle() {
    if (toggleMedia.displayVideo === "none") {
      setToggleMedia({
        displayImages: "none",
        displayVideo: "block",
      })
    }
  }

  return (
    <ImageContainer>
      <StyledThumbs>
        <div>
          <div className="thumbnail" data-main={mainImage.main1}>
            <img
              onClick={handleClick}
              src={thumbnail.thumb1}
              alt=""
              data-main={mainImage.main1}
            />
          </div>
          <div className="thumbnail" data-main={mainImage.main2}>
            <img
              onClick={handleClick}
              src={thumbnail.thumb2}
              alt=""
              data-main={mainImage.main2}
            />
          </div>
          <div className="thumbnail" data-main={mainImage.main3}>
            <img
              onClick={handleClick}
              src={thumbnail.thumb3}
              alt=""
              data-main={mainImage.main3}
            />
          </div>
          <div className="thumbnail" data-main={mainImage.main4}>
            <img
              onClick={handleClick}
              src={thumbnail.thumb4}
              alt=""
              data-main={mainImage.main4}
            />
          </div>
          <div className="thumbnail" data-main={mainImage.main5}>
            <img
              onClick={handleClick}
              src={thumbnail.thumb5}
              alt=""
              data-main={mainImage.main5}
            />
          </div>
          <div onClick={handleVideoToggle} className="thumbnail">
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </StyledThumbs>
      <StyledMainMedia>
        <div className="main-media-container">
          <img
            style={{ display: toggleMedia.displayImages }}
            src={mainImageRender}
            alt=""
          />
          <iframe
            style={{ display: toggleMedia.displayVideo, paddingTop: "5rem" }}
            width="500"
            height="280"
            src="https://www.youtube.com/embed/nr0SX8xviSk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </StyledMainMedia>
    </ImageContainer>
  )
}

export default ImageCarousel
