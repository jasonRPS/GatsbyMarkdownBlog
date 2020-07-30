import React from "react"
import styled from "styled-components"
import BrochureIcon from "./individualProductPage/images/brochure-icon-40h.jpg"
import TechIcon from "./individualProductPage/images/tech-specs-icon-40h.jpg"
import PartsIcon from "./individualProductPage/images/parts-manual-40h.jpg"
import OperatorIcon from "./individualProductPage/images/operator-manual-40h.jpg"

const StyledDownloadsBar = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 1350px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 650px) {
    width: 300px;
    margin: 0 auto;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ed2024;
    transition-duration: 0.5s;
    @media (max-width: 1350px) {
      margin-bottom: 5px;
    }

    img {
      height: 30px;
      width: auto;
      transition: transform 0.2s;
    }
    &:hover {
      img {
        /* height: 40px; */
        transform: scale(1.5);
      }
    }
  }
`

const DownloadsBar = props => {
  return (
    <StyledDownloadsBar>
      <a className="wrapper" href={props.brochureLink} target="_blank">
        <img src={BrochureIcon} alt="download brochure" />
        <span style={{ marginLeft: ".5rem" }}>Brochure</span>
      </a>
      <a className="wrapper" href={props.techLink} target="_blank">
        <img src={TechIcon} alt="download technical specifications" />
        <span style={{ marginLeft: ".5rem" }}>Tech Specs</span>
      </a>
      <a className="wrapper" href={props.partsLink} target="_blank">
        <img src={PartsIcon} alt="download parts manual" />
        <span style={{ marginLeft: ".5rem" }}>Parts Manual</span>
      </a>
      <a className="wrapper" href={props.opLink} target="_blank">
        <img src={OperatorIcon} alt="download operator manual" />
        <span style={{ marginLeft: ".5rem" }}>Operator Manual</span>
      </a>
    </StyledDownloadsBar>
  )
}

export default DownloadsBar
