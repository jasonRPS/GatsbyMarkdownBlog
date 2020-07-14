import React from "react"
import styled from "styled-components"
import OptionsSelect from "./OptionsSelect"

const StyledOptionsContainer = styled.div``

const OptionsBar = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  /* padding: 1.5rem; */
  background-color: #ed2024;
  font-size: 2em;
`

const OptionsSections = () => {
  return (
    <StyledOptionsContainer>
      <OptionsBar>
        <p>Options</p>
      </OptionsBar>
      <OptionsSelect />
    </StyledOptionsContainer>
  )
}

export default OptionsSections
