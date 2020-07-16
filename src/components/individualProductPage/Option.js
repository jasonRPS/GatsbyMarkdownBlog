import React from "react"
import styled from "styled-components"
import BatteryWetImage from "./images/mini-hd-options-single-point-watering-system.png"

const StyledContainer = styled.div`
  display: flex;
  max-width: 650px;
  height: 200px;
  /* border: 2px solid blue; */
  margin: 0.5rem auto;
  /* justify-content: space-around; */
  /* padding: 0 0.5rem; */

  @media (max-width: 1335px) {
    max-width: 550px;
    align-items: center;
  }
  @media (max-width: 1180px) {
    max-width: 500px;
  }
  @media (max-width: 1075px) {
    max-width: 450px;
  }

  @media (max-width: 965px) {
    max-width: 850px;
  }

  @media (max-width: 650px) {
    max-width: 500px;
  }

  @media (max-width: 540px) {
    max-width: 400px;
  }
  @media (max-width: 425px) {
    max-width: 350px;
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
    @media (max-width: 965px) {
      width: 300px;
      height: 200px;
    }
    @media (max-width: 540px) {
      width: 250px;
      height: 150px;
    }

    @media (max-width: 425px) {
      width: 150px;
      height: 100px;
    }
  }

  .content-container {
    width: 300px;
    height: auto;
    /* border: 2px solid green; */
    @media (max-width: 965px) {
      max-width: 600px;
      /* height: 200px; */
    }
    @media (max-width: 540px) {
      max-width: 300px;
      /* height: 200px; */
    }

    h3 {
      margin: 0;
      border-bottom: 3px solid red;
      @media (max-width: 425px) {
        font-size: 1em;
      }
    }

    p {
      margin: 0;
      @media (max-width: 425px) {
        font-size: 0.8em;
      }
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
