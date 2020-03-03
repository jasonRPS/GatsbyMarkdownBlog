import React from "react"
import styled from "styled-components"

import Image1 from "../../images/fc-image.jpg"
import Image2 from "../../images/fc-image2.jpg"
import Image3 from "../../images/fc-image3.jpg"
import Image4 from "../../images/fc-image4.jpg"
import Image5 from "../../images/fc-image5.jpg"
import Image6 from "../../images/fc-image6.jpg"
import Image7 from "../../images/fc-image7.jpg"
import Image8 from "../../images/fc-image8.jpg"
import Image9 from "../../images/fc-image9.jpg"
import Image10 from "../../images/charger.jpg"

const GalleryStyles = styled.div`
  #gallery-container {
    position: absolute;
    top: 100px;
    width: 70%;
    left: 50%;
    margin-left: -35%;
    height: 80vh;
    background-color: white;
    z-index: 5;
    border: 1px solid black;
    box-shadow: 10px 10px 10px black;

    #x-close {
      position: absolute;
      font-size: 2em;
      right: 20px;
      top: 20px;
      z-index: 2;

      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  }

  .main-image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  #thumbnail-container {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    bottom: 0;
    background-color: black;
    padding: 1.5rem 0;

    .thumbnail {
      width: 80px;
      height: 80px;

      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        margin: 0 1rem;
        margin-left: auto;
        margin-right: auto;
      }

      @supports (-ms-ime-align: auto) {
        width: 90%;
        margin: 0 1rem;
        margin-left: auto;
        margin-right: auto;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  #modal-title {
    position: absolute;
    color: white;
    z-index: 5;
    top: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;

    h1 {
      padding: 0;
      margin: 0;
    }
  }
`

//#323232

const ImageGalleryModal = props => {
  return (
    <GalleryStyles>
      <div
        style={{ display: props.modalApplicationDisplay }}
        id="gallery-container"
      >
        <div id="x-close">
          <i onClick={props.closeModal} className="fas fa-times-circle"></i>
        </div>
        <div id="modal-title">
          <h1>APPLICATION GALLERY</h1>
        </div>
        <div className="main-image">
          <img src={Image1} alt="" />
        </div>
        <div id="thumbnail-container">
          <div className="thumbnail">
            <img src={Image1} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image2} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image3} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image4} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image5} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image6} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image7} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image8} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image9} alt="" />
          </div>
          <div className="thumbnail">
            <img src={Image10} alt="" />
          </div>
        </div>
      </div>
    </GalleryStyles>
  )
}

export default ImageGalleryModal
