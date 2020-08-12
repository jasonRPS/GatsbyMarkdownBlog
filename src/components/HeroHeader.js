import React from "react"
import styled from "styled-components"
import SeeMoreButton from "./controls/SeeMoreButton"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-content {
    /* max-width: 1400px; */
    position: absolute;
    text-align: center;
    font-size: 2em;
    color: white;
    bottom: 50%;
    margin-bottom: -72.5px;
    left: 50%;
    margin-left: -346px;

    h1 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    @media (max-width: 670px) {
      font-size: 1.5em;
      margin-bottom: -54.5px;
      margin-left: -260px;
    }

    @media (max-width: 500px) {
      font-size: 1em;
      margin-bottom: -36px;
      margin-left: -173px;
    }
  }

  .see-more {
    text-align: center;
    font-size: 2em;
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -135px;
  }
`

const HeroHeader = props => {
  return (
    <HeroContainer>
      <img src={props.heroImage} />
      <div className="hero-content">
        <h1>{props.title}</h1>
        <p>{props.subHeading}</p>
      </div>
      <div className="see-more">
        <SeeMoreButton title={props.buttonTitle} />
      </div>
    </HeroContainer>
  )
}

export default HeroHeader
