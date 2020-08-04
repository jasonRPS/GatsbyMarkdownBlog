import React from "react"
import styled from "styled-components"
import SeeMoreButton from "./controls/SeeMoreButton"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .heading-content {
    width: 1400px;
    right: 50%;
    margin-right: -700px;
    position: absolute;
    color: white;
    top: 40%;

    h1 {
      font-size: 4em;
      margin: 0;
    }
    h4 {
      font-size: 1em;
      margin: 0;
    }
  }
`

const HeroHeader = props => {
  return (
    <HeroContainer>
      <img src={props.heroImage} alt="" />
      <div className="heading-content">
        <h1>{props.title}</h1>
        <h4>{props.subHeading}</h4>
        <SeeMoreButton
          title={props.buttonTitle}
          fontSize="2em"
          goTo="#walk-behind-floor-scrubber-products"
        />
      </div>
    </HeroContainer>
  )
}

export default HeroHeader
