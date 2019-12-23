import React from "react"
import styled from "styled-components"

const CallToActionCardStyles = styled.div`
  #container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
  }
`

const CallToActionCard = () => {
  return (
    <CallToActionCardStyles>
      <div id="container"></div>
    </CallToActionCardStyles>
  )
}

export default CallToActionCard
