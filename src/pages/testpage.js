import React from "react"
import styled from "styled-components"
import Image from "../images/zero.jpg"

const BigImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;

  #left-fade {
    width: 30%;
    height: 400px;
    background-color: black;
    background-image: linear-gradient(to right, black, white);
    z-index: 3;
    opacity: 0.9;
  }

  #right-fade {
    width: 30%;
    height: 400px;
    background-color: black;
    background-image: linear-gradient(to left, black, white);
    z-index: 3;
    opacity: 0.9;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  top: 0;
  left: 25%;
  position: absolute;
`

const TestPage = () => {
  return (
    <>
      <BigImage>
        <div id="left-fade"></div>
        <div id="right-fade"></div>
      </BigImage>
      <ImageContainer>
        <img src={Image} alt="" width="50%" height="400px" />
      </ImageContainer>
    </>
  )
}

export default TestPage
