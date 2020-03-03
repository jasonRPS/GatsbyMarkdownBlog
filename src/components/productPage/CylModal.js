import React from "react"
import styled from "styled-components"

const CylModalStyles = styled.div`
  #video-modal-container {
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
`

const CylModal = props => {
  return (
    <CylModalStyles>
      <div
        id="video-modal-container"
        style={{ display: props.modalCylDisplay }}
      >
        <div id="x-close">
          <i onClick={props.closeModal} className="fas fa-times-circle"></i>
        </div>
        Cylindrical Benefits
      </div>
    </CylModalStyles>
  )
}

export default CylModal
