import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledTile = styled.div`
  text-align: center;
  width: 300px;
  height: 150px;
  color: white;
  background: black;
  margin: 4px 4px;
  cursor: pointer;

  h1 {
    padding-top: 10%;
    @media (max-width: 1235px) {
      padding-top: 5%;
      font-size: 1.5em;
    }
    @media (max-width: 840px) {
      font-size: 2em;
    }
  }

  p {
    margin: 0;
    @media (max-width: 1235px) {
      font-size: 0.8em;
    }
    @media (max-width: 840px) {
      font-size: 1em;
    }
  }

  @media (max-width: 1235px) {
    width: 200px;
    height: 100px;
  }
  @media (max-width: 840px) {
    width: 300px;
    height: 150px;
  }
`

const MediaTile = props => {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={props.link}>
      <StyledTile>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </StyledTile>
    </Link>
  )
}

export default MediaTile
