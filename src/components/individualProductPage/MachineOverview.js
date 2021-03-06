import React from "react"
import styled from "styled-components"

const StyledMachineOverview = styled.div`
  max-width: 1400px;
  padding: 0.3rem;
  /* height: 700px; */
  /* border: 2px solid black; */
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const MachineOverview = props => {
  return (
    <StyledMachineOverview>
      <img src={props.image} alt="" />
    </StyledMachineOverview>
  )
}

export default MachineOverview
