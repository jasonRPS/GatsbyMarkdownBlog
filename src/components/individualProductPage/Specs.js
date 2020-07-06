import React from "react"
import styled from "styled-components"
import SpecImage from "./images/mini-hd-machine-cad-drawings-size.jpg"

const ImageContainer = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
`

const SpecContainer = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 1.5em;
  font-family: "Titillium Web", sans-serif;

  .left-container {
    width: 100%;
  }

  .bg-white {
    background-color: white;
  }
  .bg-grey {
    background-color: grey;
  }

  .left-content {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 10% 45% 45%;
  }
  .right-content {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 10% 45% 45%;
  }

  i {
    align-self: center;
    color: red;
  }
`

const Specs = () => {
  return (
    <>
      <ImageContainer>
        <img
          style={{ width: "1400px", margin: "0 auto" }}
          src={SpecImage}
          alt=""
        />
      </ImageContainer>
      <SpecContainer>
        <div className="left-container ">
          <div className="left-content">
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
            <i className="far fa-check-circle" />
            <span>Weight (w/o batteries):</span>
            <span>393 - 443 lbs</span>
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
          </div>
        </div>
        <div className="right-container">
          <div className="right-content">
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
            <i className="far fa-check-circle" />
            <span>Weight (w/o batteries):</span>
            <span>393 - 443 lbs</span>
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52'' × 22'' × 40''</span>
          </div>
        </div>
      </SpecContainer>
    </>
  )
}

export default Specs
