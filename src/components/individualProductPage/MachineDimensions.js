import React from "react"
import styled from "styled-components"
import MachineDimensionImage from "./images/machine-spec-line-drawing.jpg"

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
  max-width: 1100px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  margin: 1rem auto;
  font-size: 1.5em;
  @media (max-width: 1130px) {
    font-size: 1em;
    max-width: 800px;
    padding: 0 1rem;
  }
  @media (max-width: 640px) {
    max-width: 500px;
    grid-template-columns: 100%;
    /* margin: 0 auto; */
    grid-gap: 0;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
  }

  .list-content {
    display: grid;
    grid-template-columns: 6% 55% 44%;
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
  }

  .left-list {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
    }
  }

  .right-list {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
    }
  }
`

const MachineDimensions = () => {
  return (
    <>
      <StyledMachineDimensions>
        <img src={MachineDimensionImage} alt="Machine Dimensions" />
      </StyledMachineDimensions>
      <StyledListContainer>
        <div className="left-list">
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>Size (L x W x H):</span>
            <span>52" × 22" × 40"</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>Weight (w/o batteries):</span>
            <span>393 - 443 lbs</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>System Voltage:</span>
            <span>24 VDC</span>
          </div>
        </div>
        <div className="right-list">
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>Standard Battery:</span>
            <span>210 ah WET</span>
          </div>

          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>Power:</span>
            <span>0.75hp</span>
          </div>
          <div className="list-content">
            <i className="far fa-check-circle" />
            <span>Tank Material:</span>
            <span>Poly 3/8"</span>
          </div>
        </div>
      </StyledListContainer>
    </>
  )
}

export default MachineDimensions
