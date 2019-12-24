import React from "react"
import styled from "styled-components"

const CallToActionCardStyles = styled.div`
  #container {
    width: 280px;
    margin: 1rem;
    h1 {
      font-size: 1rem;
      font-weight: normal;
      font-style: italic;
    }

    #image-container {
      width: 280px;
      height: 280px;
      border: 2px solid black;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

const CallToActionCard = props => {
  return (
    <CallToActionCardStyles>
      <div id="container">
        <h1>{props.title}</h1>
        <div id="image-container">
          <img src={props.image} />
        </div>
        <p>{props.callToAction}</p>
      </div>
    </CallToActionCardStyles>
  )
}

export default CallToActionCard
