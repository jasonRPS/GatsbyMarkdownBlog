import React from "react"
import styled from "styled-components"
import HeavyDutyBackground from "./images/heavy-duty-background.jpg"

const StyledHeavyDuty = styled.div`
  position: relative;
  max-width: 1400px;
  height: 270px;
  margin: 1rem auto;
  background-image: url(${HeavyDutyBackground});
  color: white;

  h2 {
    width: 500px;
    position: absolute;
    right: 0px;
    top: 30px;
    font-size: 5em;
    line-height: 100px;
    margin: 0;
    padding: 0;
    z-index: 2;

    @media (max-width: 550px) {
      text-align: center;
      left: 50%;
      margin-left: -250px;
    }

    @media (max-width: 480px) {
      text-align: center;
      /* font-size: 4em; */
      width: 450;
      left: 50%;
      margin-left: -250px;
    }

    @media (max-width: 460px) {
      font-size: 3.5em;
      width: 350px;
      left: 50%;
      margin-left: -175px;
    }
  }

  .heavy-layover {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;

    @media (max-width: 1190px) {
      display: block;
    }
  }
`

const HeavyDuty = () => {
  return (
    <StyledHeavyDuty>
      <h2>HEAVY DUTY CLEANING</h2>
      <div className="heavy-layover"></div>
    </StyledHeavyDuty>
  )
}

export default HeavyDuty
