import React from "react"
import styled from "styled-components"

const StyledSectionTitle = styled.div`
  position: relative;

  #background {
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
    /* margin: 10px 90px; */
  }

  h1 {
    position: absolute;
    top: 0;
    padding: 0 0.6rem;
    color: white;
  }
`

const SectionTitle = props => {
  return (
    <>
      <StyledSectionTitle>
        <div id="container">
          <div id="background"></div>
          <h1>{props.title}</h1>
        </div>
      </StyledSectionTitle>
    </>
  )
}

export default SectionTitle