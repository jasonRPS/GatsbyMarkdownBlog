import React from "react"
import styled from "styled-components"
import { StyledThumbs, StyledMainMedia } from "./FeaturedProductStyles"
import { Button } from "../../common"

const ImageContainer = styled.div`
  display: flex;
  @media (max-width: 1350px) {
    flex-direction: column-reverse;
  }
`

const ImageCarousel = props => {
  return (
    <>
      <ImageContainer>
        <StyledThumbs>
          <div className="thumbnail" data-main={props.mainImage.main1}>
            <img
              onClick={props.handleClick}
              src={props.thumbnail.thumb1}
              alt=""
              data-main={props.mainImage.main1}
            />
          </div>
          <div className="thumbnail" data-main={props.mainImage.main2}>
            <img
              onClick={props.handleClick}
              src={props.thumbnail.thumb2}
              alt=""
              data-main={props.mainImage.main2}
            />
          </div>
          <div className="thumbnail" data-main={props.mainImage.main3}>
            <img
              onClick={props.handleClick}
              src={props.thumbnail.thumb3}
              alt=""
              data-main={props.mainImage.main3}
            />
          </div>
          <div className="thumbnail" data-main={props.mainImage.main4}>
            <img
              onClick={props.handleClick}
              src={props.thumbnail.thumb4}
              alt=""
              data-main={props.mainImage.main4}
            />
          </div>
          <div className="thumbnail" data-main={props.mainImage.main5}>
            <img
              onClick={props.handleClick}
              src={props.thumbnail.thumb5}
              alt=""
              data-main={props.mainImage.main5}
            />
          </div>
          <div onClick={props.handleVideoToggle} className="thumbnail">
            <i className="fab fa-youtube"></i>
          </div>
        </StyledThumbs>
        <StyledMainMedia>
          <div className="main-media-container">
            <img
              style={{ display: props.toggleMedia.displayImages }}
              src={props.mainImageRender}
              alt=""
            />
            <iframe
              style={{
                display: props.toggleMedia.displayVideo,
                paddingTop: "5rem",
              }}
              width="500"
              height="280"
              src="https://www.youtube.com/embed/nr0SX8xviSk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </StyledMainMedia>
      </ImageContainer>
    </>
  )
}

export default ImageCarousel
