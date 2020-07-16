import React, { useState, useRef } from "react"
import styled from "styled-components"
import Option from "./Option"
import BatteryWetImage from "./images/mini-hd-options-wet-batteries-square-cropped-zoomed.png"

const StyledOptionsBody = styled.div`
  #body-set {
    max-width: 1400px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
    overflow: hidden;
    justify-items: center;
    /* border: 4px solid green; */

    @media (max-width: 965px) {
      grid-template-columns: 100%;
    }
  }

  h2 {
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    cursor: pointer;
  }
`
const OptionsSelect = props => {
  const content = useRef(null)
  // console.log(content.current.scrollHeight)

  const [toggle, setToggle] = useState({
    more: "View More",
    arrow: "fas fa-caret-down",
    height: "450px",
  })

  function handClick() {
    if (toggle.more === "View More") {
      setToggle({
        more: "View Less",
        arrow: "fas fa-caret-up",
        height: `${content.current.scrollHeight}px`,
      })
    } else {
      setToggle({
        more: "View More",
        arrow: "fas fa-caret-down",
        height: "450px",
      })
    }
  }

  return (
    <>
      <StyledOptionsBody>
        <div
          ref={content}
          style={{ maxHeight: toggle.height, transitionDuration: ".5s" }}
          id="body-set"
          className={toggle.height}
        >
          <Option
            image={props.image1}
            title={props.title1}
            description={props.description1}
          />
          <Option
            image={props.image2}
            title={props.title2}
            description={props.description2}
          />
          <Option
            image={props.image3}
            title={props.title3}
            description={props.description3}
          />
          <Option
            image={props.image4}
            title={props.title4}
            description={props.description4}
          />
          <Option
            image={props.image5}
            title={props.title5}
            description={props.description5}
          />
          <Option
            image={props.image6}
            title={props.title6}
            description={props.description6}
          />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
          <Option />
        </div>
      </StyledOptionsBody>
      <h2
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={handClick}
      >
        {toggle.more} <i className={toggle.arrow} />
      </h2>
    </>
  )
}

export default OptionsSelect
