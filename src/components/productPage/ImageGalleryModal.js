import React from "react"
import styled from "styled-components"

const GalleryStyles = styled.div`
  #gallery-container {
    position: absolute;
    top: 100px;
    width: 70%;
    left: 50%;
    margin-left: -35%;
    height: 80vh;
    background-color: white;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 10px 10px 10px black;

    #x-close {
      position: absolute;
      font-size: 2em;
      right: 20px;
      top: 20px;

      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
`

const ImageGalleryModal = props => {
  return (
    <GalleryStyles>
      <div style={{ display: props.modalDisplay }} id="gallery-container">
        <div id="x-close">
          <i onClick={props.closeModal} className="fas fa-times-circle"></i>
        </div>
      </div>
    </GalleryStyles>
  )
}

export default ImageGalleryModal
