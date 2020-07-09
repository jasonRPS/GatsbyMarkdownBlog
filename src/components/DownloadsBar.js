import React from "react"
import styled from "styled-components"
import BrochureIcon from "./individualProductPage/images/brochure-icon-xh30.jpg"
import TechIcon from "./individualProductPage/images/tech-spec-icon-xh30.jpg"
import PartsIcon from "./individualProductPage/images/parts-manual-icon-xh30.jpg"
import OperatorIcon from "./individualProductPage/images/operator-manual-xh30.jpg"

const StyledDownloadsBar = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 1350px) {
    width: 300px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ed2024;
    @media (max-width: 1350px) {
      margin-bottom: 5px;
    }
  }
`

const DownloadsBar = () => {
  return (
    <StyledDownloadsBar>
      <a className="wrapper" href="#">
        {/* <i className="fas fa-download"> </i> */}
        <img src={BrochureIcon} alt="download brochure" />
        <span style={{ marginLeft: ".5rem" }}>Brochure</span>
      </a>
      <a className="wrapper" href="#">
        {/* <i className="fas fa-download"> </i> */}
        <img src={TechIcon} alt="download technical specifications" />
        <span style={{ marginLeft: ".5rem" }}>Technical Specifications</span>
      </a>
      <a className="wrapper" href="#">
        {/* <i className="fas fa-download"> </i> */}
        <img src={PartsIcon} alt="download parts manual" />
        <span style={{ marginLeft: ".5rem" }}>Parts Manual</span>
      </a>
      <a className="wrapper" href="#">
        {/* <i className="fas fa-download"> </i> */}
        <img src={OperatorIcon} alt="download operator manual" />
        <span style={{ marginLeft: ".5rem" }}>Operator Manual</span>
      </a>
    </StyledDownloadsBar>
  )
}

export default DownloadsBar
