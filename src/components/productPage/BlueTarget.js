import React from "react"
import styled from "styled-components"

const BlueTargetStyles = styled.div``

const BlueTarget = props => {
  return (
    <div className="blue-target-container">
      <div className="second-inner">{props.number}</div>
    </div>
  )
}

export default BlueTarget
