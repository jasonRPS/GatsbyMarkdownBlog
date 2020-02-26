import React, { useState } from "react"
import styled from "styled-components"
import CommonOptions from "./CommonOptions"
import bgImage from "../../images/fc-image3.jpg"
import Video from "../../images/factory-video.mp4"

const OptionsStyles = styled.div`
  #options-section-container {
    width: 90%;
    margin: 2rem auto;
    justify-content: space-evenly;
    background-color: white;
    padding-bottom: 2rem;
  }

  .options-body {
    padding: 2rem 3rem;
  }

  .options-data {
    display: flex;
    justify-content: space-around;
  }

  #video-modal {
    position: absolute;
    z-index: 3;
    width: 80%;
    height: 70vh;
    background-color: white;
    box-shadow: 10px 10px 10px black;
    left: 50%;
    margin-left: -40%;

    video {
      width: 100%;
      height: 100%;
    }

    i {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 2em;
      color: red;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .open-modal {
    &:hover {
      cursor: pointer;
    }
  }
`

const OptionsSection = props => {
  const [modal, setModal] = useState("none")

  function openModal() {
    setModal("block")
  }

  function closeModal() {
    setModal("none")
  }

  return (
    <OptionsStyles>
      <div style={{ display: modal }} id="video-modal">
        <video className="video" loop autoPlay controls muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
        <i onClick={closeModal} className="far fa-times-circle"></i>
      </div>
      <div id="options-section-container">
        <div className="options-body">
          <h3>Common Options</h3>
          <div className="options-data">
            <div className="left-column">
              <div className="open-modal" onClick={openModal}>
                <CommonOptions
                  optionImage={props.optionImage1}
                  optionsTitle={props.optionsTitle1}
                  optionsDescription={props.optionsDescription1}
                />
              </div>
              <CommonOptions
                optionImage={props.optionImage2}
                optionsTitle={props.optionsTitle2}
                optionsDescription={props.optionsDescription2}
              />
              <CommonOptions
                optionImage={props.optionImage3}
                optionsTitle={props.optionsTitle3}
                optionsDescription={props.optionsDescription3}
              />
            </div>
            <div className="right-column">
              <CommonOptions
                optionImage={props.optionImage4}
                optionsTitle={props.optionsTitle4}
                optionsDescription={props.optionsDescription4}
              />
              <CommonOptions
                optionImage={props.optionImage5}
                optionsTitle={props.optionsTitle5}
                optionsDescription={props.optionsDescription5}
              />
              <CommonOptions
                optionImage={props.optionImage6}
                optionsTitle={props.optionsTitle6}
                optionsDescription={props.optionsDescription6}
              />
            </div>
          </div>
        </div>
      </div>
    </OptionsStyles>
  )
}

export default OptionsSection
