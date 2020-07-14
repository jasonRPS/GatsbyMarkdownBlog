import React from "react"
import styled from "styled-components"
import StealBackground from "../images/steal-background.jpg"
import MachineImage from "../images/mini-hd-25c-cylindrical-profile.56.png"

const StyledMainSpecBar = styled.div`
  position: relative;
  max-width: 1400px;

  height: 270px;
  margin: 1rem auto;
  background-image: url(${StealBackground});
  color: white;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
  }

  .text-content {
    position: absolute;
    top: 0;
    z-index: 2;
    /* border: 2px solid green; */
    width: 50%;
    height: 100%;
    text-align: center;
    margin-left: 2rem;
    @media (max-width: 1030px) {
      width: 100%;
      margin: 0;
    }

    h1 {
      margin: 0;
      font-size: 3em;
    }
    p {
      font-size: 1.5em;
      margin: 0;
      border-bottom: 4px solid red;
    }
    .specs-container {
      display: flex;
      justify-content: space-around;

      .spec {
        text-align: left;
        h3 {
          margin: 0;
          @media (max-width: 540px) {
            font-size: 1em;
          }
        }
        h2 {
          margin: 0;
          @media (max-width: 540px) {
            font-size: 1em;
          }
        }
        .spec-p {
          font-size: 1rem;
          border: none;
          margin: 0;
          color: gray;
          font-style: italic;
        }
      }
    }
  }

  .image-container {
    position: absolute;
    right: 0;
    width: 450px;
    height: 250px;
    /* border: 2px solid green; */

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media (max-width: 540px) {
      width: 350px;
    }
  }

  .background-layer {
    @media (max-width: 1030px) {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`

const MainSpecBar = () => {
  return (
    <StyledMainSpecBar>
      <div className="text-content background-layer">
        <h1>Mini-HD</h1>
        <p>Walk Behind Floor Scrubber</p>
        <div className="specs-container">
          <div className="spec">
            <h3>Cleaning Path:</h3>
            <h2>25-29"</h2>
            <p className="spec-p">(51-73)</p>
          </div>
          <div className="spec">
            <h3>Run Time:</h3>
            <h2>3.5 Hours</h2>
            <p className="spec-p">Battery Life</p>
          </div>
          <div className="spec">
            <h3>Tank Capacity:</h3>
            <h2>
              Solution: 16 Gal{" "}
              <span style={{ color: "gray", fontStyle: "italic" }}>(60L)</span>
            </h2>
            <h2>
              Recovery: 16 Gal{" "}
              <span style={{ color: "gray", fontStyle: "italic" }}>(60L)</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={MachineImage} alt="" />
      </div>
    </StyledMainSpecBar>
  )
}

export default MainSpecBar
