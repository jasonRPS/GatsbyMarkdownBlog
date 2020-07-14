import React from "react"
import styled from "styled-components"
import PlaceHolderImage from "./images/mini-hd-25c-cylindrical-profile.75-n.png"

const StyledContainer = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  font-family: "Titillium Web", sans-serif;

  img {
    border-radius: 15px;
    width: 160px;
    height: 130px;
    margin: 0 0.5rem;
  }

  h3 {
    margin: 0;
    border-bottom: 2px solid red;
    max-width: 200px;
  }
  p {
    margin: 0;
    max-width: 250px;
  }

  .ms-placement {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 33.3%;
    }
  }
`

const Option = () => {
  return (
    <StyledContainer>
      <img src={PlaceHolderImage} alt="" />
      <div className="ms-placement">
        <h3>Stainless Steel Deck</h3>
        <p>
          Give your machine the protection it deserves with a fully Stainless
          Steel Deck. The stylish stainless metal prolongs the life of any deck
          by guarding against moisture and chemical.
        </p>
      </div>
    </StyledContainer>
  )
}

export default Option
