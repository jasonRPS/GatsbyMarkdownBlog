import React from "react"
import styled from "styled-components"

const SectionTitleStyles = styled.div`
  position: relative;
  text-align: center;
  color: #3f2e2e;
  margin: 3rem auto;
  /* padding: 0.4rem; */
  font-weight: bold;
  /* border-bottom: 4px solid #83b799; */
  width: 400px;

  h1 {
    transform: rotate(3deg);
    padding: 0 0.7rem;
    font-size: 2em;
    /* -webkit-text-stroke: 1px black; */
    color: white;
    margin: 0;

    i {
      position: absolute;
      top: -5px;
      left: -40px;
      font-size: 1.5em;
      color: black;
    }
  }

  .title-container {
    background-color: #83b799;
    /* transform: rotate(-20deg); */
    transform: skew(-5deg, -6deg);
    border: 2px solid black;
    box-shadow: 5px 5px 25px 10px;
    /* border-top-left-radius: 20px; */
    /* border-top-right-radius: 10px; */
    /* border-bottom-right-radius: 10px; */
  }
`

const SectionTitle = props => {
  return (
    <SectionTitleStyles>
      <div className="title-container">
        <h1>
          <i className={props.icon}></i> {props.title}
        </h1>
      </div>
    </SectionTitleStyles>
  )
}

export default SectionTitle
