import React, { useState } from "react"
import styled from "styled-components"

const PageSubNavContainer = styled.div`
  position: sticky;
  top: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 40px;
  margin: 1rem 0;
  z-index: 11;
  font-family: "Titillium Web", sans-serif;

  a {
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0.4rem;
  }

  .sub-nav-link {
    text-align: center;
  }

  .selected {
    background-color: #ed2024;
    transition-duration: 0.3s;
    /* padding: 5px 1rem; */
  }
`

const PageSubNav = () => {
  const [selected, setSelected] = useState({
    link1: "sub-nav-link",
    link2: "sub-nav-link",
    link3: "sub-nav-link",
  })

  function handleSelected(e) {
    if (e.target.innerText === "Features") {
      setSelected(
        previousSelected =>
          (previousSelected = {
            link1: "sub-nav-link selected",
            link2: "",
            link3: "",
          })
      )
    } else if (e.target.innerText === "Specifications") {
      setSelected(
        previousSelected =>
          (previousSelected = {
            link1: "",
            link2: "sub-nav-link selected",
            link3: "",
          })
      )
    } else
      setSelected(
        previousSelected =>
          (previousSelected = {
            link1: "",
            link2: "",
            link3: "sub-nav-link selected",
          })
      )
  }
  return (
    <PageSubNavContainer onClick={handleSelected}>
      <a href="#features" className={selected.link1}>
        Features
      </a>
      <a href="#specifications" className={selected.link2}>
        Specifications
      </a>
      <a href="#options" className={selected.link3}>
        Options
      </a>
    </PageSubNavContainer>
  )
}

export default PageSubNav
