import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledTile = styled.div`
  text-align: center;
  width: 300px;
  height: 160px;
  color: white;
  background: black;
  margin: 12px 4px;
  cursor: pointer;

  h1 {
    padding-top: 10%;
  }

  p {
    margin: 0;
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
