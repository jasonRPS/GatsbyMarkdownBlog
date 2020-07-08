import React from "react"
import styled from "styled-components"

const StyledDownloadsBar = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #ed2024;
  }
`

const DownloadsBar = () => {
  return (
    <StyledDownloadsBar>
      <a className="wrapper" href="#">
        <i className="fas fa-download"> </i>
        <span style={{ marginLeft: ".5rem" }}>Brochure</span>
      </a>
      <a className="wrapper" href="#">
        <i className="fas fa-download"> </i>
        <span style={{ marginLeft: ".5rem" }}>Technical Specifications</span>
      </a>
      <a className="wrapper" href="#">
        <i className="fas fa-download"> </i>
        <span style={{ marginLeft: ".5rem" }}>Parts Manual</span>
      </a>
      <a className="wrapper" href="#">
        <i className="fas fa-download"> </i>
        <span style={{ marginLeft: ".5rem" }}>Operator Manual</span>
      </a>
    </StyledDownloadsBar>
  )
}

export default DownloadsBar
