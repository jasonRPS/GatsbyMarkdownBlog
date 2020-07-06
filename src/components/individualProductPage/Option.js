import React from "react"
import styled from "styled-components"
import PlaceHolderImage from "./images/place-holder-option.jpg"

const StyledContainer = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 0.5rem;
  }
`

const Option = () => {
  return (
    <StyledContainer>
      <img src={PlaceHolderImage} alt="" />
      <p>
        I'm baby mlkshk lumbersexual forage, disrupt slow-carb hella tilde
        austin shaman marfa. Meggings meditation forage beard, vape polaroid
        edison bulb post-i
      </p>
    </StyledContainer>
  )
}

export default Option
