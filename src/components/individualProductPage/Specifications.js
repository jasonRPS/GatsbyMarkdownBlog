import React from "react"
import styled from "styled-components"

import MiniCHDImage1 from "../../images/mini-hd-25c_0001_mini-hd-25c-1.6.png"

const SpecificationsContainer = styled.div`
  position: relative;

  .image-container {
    position: relative;
    width: 500px;
    margin: 0 auto;

    img {
      width: 500px;
      margin: 0 auto;
    }

    .recovery-tank-line {
      position: absolute;
      /* z-index: 15; */
      top: -10px;
      left: 150px;
      width: 500px;
      height: 5px;
      color: red;
      width: 200px;
      border-bottom: 1px solid red;
      transform: skewY(-15deg);
    }

    .recovery-tank-text {
      font-size: large;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      top: -50px;
      left: 360px;
    }

    .front-line {
      position: absolute;
      /* z-index: 15; */
      top: 90px;
      left: 350px;
      width: 150px;
      height: 5px;
      color: red;

      border-bottom: 1px solid red;
      transform: skewY(-15deg);
    }

    .front-text {
      font-size: large;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      top: 50px;
      left: 465px;
    }

    .scrub-motors-line {
      position: absolute;
      /* width: 300px; */
      /* z-index: 15; */
      top: 280px;
      left: 370px;
      width: 200px;
      height: 5px;
      color: red;
      transform: skewY(-15deg);
      border-bottom: 1px solid red;
      /* border-width: 300px; */
    }

    .scrub-motors-text {
      font-size: large;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      top: 230px;
      left: 500px;
    }
    .deck-text {
      font-size: large;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      bottom: 80px;
      left: 440px;
    }
    .tires-text {
      font-size: large;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      bottom: 80px;
      left: 60px;
    }

    .latch-text {
      font-size: large;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      bottom: 210px;
      left: -160px;
    }

    .vac-text {
      font-size: larger;
      width: 300px;
      font-family: "Titillium Web", sans-serif;
      /* font-weight: bold; */
      position: absolute;
      color: red;
      top: 80px;
      left: -120px;
    }
  }
`

const Title = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  background-color: #ed2024;
  -webkit-transform: perspective(300px) rotateX(-30deg);
  -o-transform: perspective(300px) rotateX(-30deg);
  -moz-transform: perspective(300px) rotateX(-30deg);
  -webkit-transform-origin: 0% 50%;
  -moz-transform-origin: 0% 50%;
  -o-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  margin: 10px 90px;
`

const Specifications = () => {
  return (
    <SpecificationsContainer>
      <Title />

      <h1
        style={{
          position: "absolute",
          top: "0",
          left: "100px",
          zIndex: "2",
          color: "white",
        }}
      >
        Machine Overview
      </h1>
      <div className="image-container">
        <img src={MiniCHDImage1} alt="" />
        <div className="recovery-tank-line"></div>
        <div className="recovery-tank-text">Recovery Tank Lid</div>
        <div className="front-line"></div>
        <div className="front-text">Front Filling System</div>
        <div className="scrub-motors-line"></div>
        <div className="scrub-motors-text">HD Scrub Motors</div>
        <div className="deck-text">Stainless Steel Deck</div>
        <div className="tires-text">HD Solid Tires</div>
        <div className="latch-text">Quick Change Squeegee Latch</div>
        <div className="vac-text">Vac Clog Indicator</div>
      </div>
    </SpecificationsContainer>
  )
}

export default Specifications
