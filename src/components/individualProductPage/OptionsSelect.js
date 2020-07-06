import React from "react"
import styled from "styled-components"
import Option from "./Option"

const StyledOptionsSelect = styled.div`
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  font-size: 1.5em;
  padding: 0.5rem 0;
  margin: 1rem 0;
  font-family: "Titillium Web", sans-serif;
`

const StyledOptionsBody = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-gap: 1.5rem;
`
const OptionsSelect = () => {
  return (
    <>
      <StyledOptionsSelect>Options</StyledOptionsSelect>
      <StyledOptionsBody>
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
      </StyledOptionsBody>
    </>
  )
}

export default OptionsSelect
