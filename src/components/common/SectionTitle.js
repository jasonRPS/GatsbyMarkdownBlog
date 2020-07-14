import React from "react"
import styled from "styled-components"

const StyledSectionTitle = styled.div`
  position: relative;
  z-index: 1;
  /* position: relative; */
  width: 300px;
  height: 50px;
  padding: 0.5rem 0;
  background-color: #ed2024;
  z-index: 1;
  /* -webkit-transform: perspective(300px) rotateX(-30deg);
    -o-transform: perspective(300px) rotateX(-30deg);
    -moz-transform: perspective(300px) rotateX(-30deg);
    -webkit-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%; */
  transform: perspective(300px) rotateX(-30deg);
  transform-origin: 0% 50%;
  /* margin: 10px 90px; */

  #background {
  }

  h1 {
    margin: 0;
    position: absolute;
    z-index: 2;
    top: 10%;
    transform: perspective(300px) rotateX(30deg);
    transform-origin: 0% 0%;
    /* margin-top: -25px; */
    left: 15px;
    color: white;
  }
`

const SectionTitle = props => {
  return (
    <>
      <StyledSectionTitle>
        {/* <div id="background"></div> */}
        <h1>{props.title}</h1>
      </StyledSectionTitle>
    </>
  )
}

export default SectionTitle
