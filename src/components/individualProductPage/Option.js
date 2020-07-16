import React from "react"
import styled from "styled-components"
import BatteryWetImage from "./images/mini-hd-options-single-point-watering-system.png"

const StyledContainer = styled.div`
  display: flex;
  max-width: 650px;
  height: 200px;
  border: 2px solid blue;
  margin: 0.5rem auto;
  justify-content: space-around;
  /* padding: 0 0.5rem; */

  @media (max-width: 1335px) {
    max-width: 550px;
    align-items: center;
  }
  /* @media (max-width: 1250px) {
    max-width: 500px;
    align-items: center;
  } */

  .image-container {
    width: 300px;
    height: 200px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 1335px) {
      width: 250px;
      height: 150px;
    }
  }

  .content-container {
    width: 300px;
    height: auto;
    /* border: 2px solid green; */

    h3 {
      margin: 0;
      border-bottom: 3px solid red;
    }

    p {
      margin: 0;
    }
  }
`

const Option = props => {
  return (
    <StyledContainer>
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>

      <div className="content-container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </StyledContainer>
  )
}

export default Option
