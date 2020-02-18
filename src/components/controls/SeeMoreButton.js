import React from "react"
import styled from "styled-components"

const SeeMoreStyles = styled.div`
  #chevron {
    border: 2px solid red;
    /* background: red; */
    display: inline-block;
    height: 30px;
    margin-left: 20px;
    margin-top: 55px;
    position: relative;
    width: 200px;
    padding: 1rem;
    font-size: 0.7em;
  }
  #chevron:before {
    border-bottom: 10px solid red;
    border-left: 115px solid transparent;
    border-right: 115px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    bottom: -10px;
    width: 0;
    rotate: 180deg;
  }
`

const SeeMoreButton = props => {
  return (
    <SeeMoreStyles>
      <a style={{ color: "white" }} href={props.goTo}>
        <div id="chevron">{props.title}</div>
      </a>
    </SeeMoreStyles>
  )
}

export default SeeMoreButton
