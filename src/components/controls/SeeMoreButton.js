import React from "react"
import styled from "styled-components"

const SeeMoreStyles = styled.div`
  #chevron {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 50px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.8em;

    &:hover {
      cursor: pointer;
    }
  }
  #chevron:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    border-left: 2px solid red;
    background: transparent;
    transform: skew(0deg, 6deg);
  }
  #chevron:after {
    content: "";
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    border-right: 2px solid red;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: transparent;
    transform: skew(0deg, -6deg);
  }
`

const SeeMoreButton = props => {
  return (
    <SeeMoreStyles>
      <div id="chevron">{props.title}</div>
    </SeeMoreStyles>
  )
}

export default SeeMoreButton
