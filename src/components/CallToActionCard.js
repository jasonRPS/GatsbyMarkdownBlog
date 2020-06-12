import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CallToActionCardStyles = styled.div`
  #image-container {
    position: relative;
    width: 350px;
    height: 200px;
    margin: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
      color: white;
      position: absolute;
      left: 5%;
      z-index: 3;
      /* -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black; */
    }

    button {
      position: absolute;
      color: white;
      bottom: 40px;
      border: none;
      padding: 0.5rem;
      background-color: #ed2024;
      z-index: 3;
      text-align: center;
      left: 5%;

      &:hover {
        background-color: #333;
        color: white;
        cursor: pointer;
      }
    }

    #layer {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  }
`

const CallToActionCard = props => {
  return (
    <CallToActionCardStyles>
      <Link to={props.link}>
        <div id="image-container">
          <div id="layer"></div>
          <h1>{props.title}</h1>
          <img src={props.image} />
          <button>{props.buttonText}</button>
        </div>
      </Link>
    </CallToActionCardStyles>
  )
}

export default CallToActionCard
