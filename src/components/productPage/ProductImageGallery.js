import React, { useState } from "react"
import styled from "styled-components"

const ImageGalleryStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }

  .thumbnails {
    display: flex;
    justify-content: space-between;

    img {
      width: 80px;
    }
  }
`

const ProductImageGallery = props => {
  return (
    <ImageGalleryStyles>
      <div className="container">
        <div className="main-image">
          <img src={props.mainImage} alt="" />
        </div>
        <div className="thumbnails">
          <img onClick={props.setMainImage} src={props.thumb1} alt="" />
          <img onClick={props.setMainImage} src={props.thumb2} alt="" />
          <img onClick={props.setMainImage} src={props.thumb3} alt="" />
          <img onClick={props.setMainImage} src={props.thumb4} alt="" />
          <img onClick={props.setMainImage} src={props.thumb5} alt="" />
        </div>
      </div>
    </ImageGalleryStyles>
  )
}

export default ProductImageGallery
