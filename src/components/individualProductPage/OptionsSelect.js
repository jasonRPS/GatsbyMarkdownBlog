import React, { useState } from "react"
import styled from "styled-components"
import Option from "./Option"

const StyledOptionsBody = styled.div`
  #body-set {
    max-width: 1400px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-gap: 1.5rem;
    overflow: hidden;

    @media (max-width: 1320px) {
      grid-template-columns: 50% 50%;
      width: 1100px;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: flex;
    }
  }

  h2 {
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    cursor: pointer;
  }

  .open-options {
    height: 2400px;
    transition-duration: 0.5s;
  }
  .closed-options {
    height: 350px;
    transition-duration: 0.5s;
  }
`
const OptionsSelect = () => {
  const [toggle, setToggle] = useState({
    more: "View More",
    arrow: "fas fa-caret-down",
    height: "closed-options",
  })

  function handClick() {
    if (toggle.more === "View More") {
      setToggle({
        more: "View Less",
        arrow: "fas fa-caret-up",
        height: "open-options",
      })
    } else {
      setToggle({
        more: "View More",
        arrow: "fas fa-caret-down",
        height: "closed-options",
      })
    }
  }

  return (
    <>
      <StyledOptionsBody>
        <div id="body-set" className={toggle.height}>
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
