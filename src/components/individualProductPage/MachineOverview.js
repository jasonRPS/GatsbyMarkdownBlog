import React from "react"
import styled from "styled-components"
import MachineOverviewImage from "./images/mini-hd-machine-overview.png"

const StyledMachineOverview = styled.div`
  max-width: 1000px;
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

const MachineOverview = () => {
  return (
    <StyledMachineOverview>
      <img src={MachineOverviewImage} alt="" />
    </StyledMachineOverview>
  )
}

export default MachineOverview
