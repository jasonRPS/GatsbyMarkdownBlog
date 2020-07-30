import React from "react"
import styled from "styled-components"
import UsaBackground from "./images/made-in-usa.jpg"

const StyledUsaContainer = styled.div`
  position: relative;
  max-width: 1400px;
  height: 270px;
  margin: 1rem auto;
  background-image: url(${props => props.bgImage});
  color: white;

  h2 {
    width: 500px;
    position: absolute;
    left: 40px;
    top: 30px;
    font-size: 6em;
    line-height: 100px;
    margin: 0;
    padding: 0;

    @media (max-width: 520px) {
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
      font-size: 4em;
      width: 350px;
      left: 50%;
      margin-left: -175px;
    }
  }
`

const MadeInUSA = props => {
  return (
    <StyledUsaContainer bgImage={props.bgImage}>
      <h2>Handmade In USA</h2>
    </StyledUsaContainer>
  )
}

export default MadeInUSA
