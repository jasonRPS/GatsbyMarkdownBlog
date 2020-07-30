import React from "react"
import styled from "styled-components"

const StyledMachineDimensions = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const StyledListContainer = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 1rem auto;
  font-size: 1.5em;
  /* border: 2px solid red; */
  @media (max-width: 1115px) {
    font-size: 1.3em;
  }
  @media (max-width: 1115px) {
    font-size: 1.2em;
  }
  @media (max-width: 895px) {
    font-size: 1em;
  }
  @media (max-width: 820px) {
    font-size: 1em;
  }
  @media (max-width: 745px) {
    font-size: 0.8em;
  }
  @media (max-width: 745px) {
    font-size: 1.3em;
    grid-template-columns: 100%;
  }
  @media (max-width: 490px) {
    font-size: 1.1em;
  }
  @media (max-width: 415px) {
    font-size: 1em;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
  }

  .list-content {
    display: grid;
    grid-template-columns: 5% 60% 35%;
    align-items: center;
    /* justify-items: right; */

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: -ms-flex;
    }
    span {
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        margin-left: 2rem;
      }
    }
  }

  i {
    color: #ed2024;
    justify-self: center;
  }

  .left-list {
    /* border: 2px solid green; */
    justify-self: center;
    width: 80%;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
    }
  }

  .right-list {
    /* border: 2px solid green; */
    justify-self: center;
    width: 80%;
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
    }
  }
`

const MachineDimensions = props => {
  return (
    <>
      <StyledMachineDimensions>
        <img src={props.image} alt="Machine Dimensions" />
      </StyledMachineDimensions>
      <StyledListContainer>
        <div className="left-list">
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.sizeTitle}</span>
            <span>{props.size}</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.weightTitle}</span>
            <span>{props.weight}</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.voltageTitle}</span>
            <span>{props.voltage}</span>
          </div>
        </div>
        <div className="right-list">
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.stdBatteryTitle}</span>
            <span>{props.battery}</span>
          </div>

          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.powerTitle}</span>
            <span>{props.power}</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>{props.tankTitle}</span>
            <span>{props.tank}</span>
          </div>
        </div>
      </StyledListContainer>
    </>
  )
}

export default MachineDimensions
