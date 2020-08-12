import React from "react"
import styled from "styled-components"
import SeeMoreButton from "./controls/SeeMoreButton"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header-content {
    position: absolute;
    /* max-width: 1400px; */
    text-align: center;
    bottom: 50%;
    left: 50%;
    font-size: 2em;
    margin-left: -346.2665px;
    margin-bottom: -131.8835px;
    color: white;

    @media (max-width: 720px) {
      font-size: 1.5em;
      margin-left: -259.7165px;
      margin-bottom: -98.6665px;
    }

    @media (max-width: 515px) {
      font-size: 1em;
      margin-left: -173.1085px;
      margin-bottom: -65.4335px;
    }
  }
`

const HeroHeader = props => {
  return (
    <HeroContainer>
      <img src={props.heroImage} alt="" />
      <div className="header-content">
        <h1>FactoryCat Image Gallery</h1>
        <p>View our gallery of images</p>
      </div>
    </HeroContainer>
  )
}

export default HeroHeader
