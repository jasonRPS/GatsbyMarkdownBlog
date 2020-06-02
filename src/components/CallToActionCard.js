import React from "react"
import styled from "styled-components"

const CallToActionCardStyles = styled.div`
  #image-container {
    width: 350px;
    height: 240px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const CallToActionCard = props => {
  return (
    <CallToActionCardStyles>
      <div id="image-container">
        <img src={props.image} />
      </div>
    </CallToActionCardStyles>
  )
}

export default CallToActionCard
