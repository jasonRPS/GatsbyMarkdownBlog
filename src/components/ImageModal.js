import React from "react"
import styled from "styled-components"

const ImageModalStyles = styled.div`
  #modal-for-images {
    position: absolute;
    width: 60%;
    height: 80vh;
    left: 50%;
    margin-left: -30%;
    z-index: 6;
    top: 10%;
    border: 2px solid black;
    transition-duration: 0.5s;
    background-color: whitesmoke;
    box-shadow: 10px 10px 10px black;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .background-overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const ImageModal = props => {
  return (
    <ImageModalStyles>
      <div
        style={{ display: props.showModal, opacity: props.modalOpacity }}
        id="modal-for-images"
      >
        <div onClick={props.closeModal} className="close">
          X
        </div>
      </div>
      <div
        style={{ display: props.showModal }}
        className="background-overlay"
      ></div>
    </ImageModalStyles>
  )
}

export default ImageModal
