import React from "react"
import styled from "styled-components"

const PageSubNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 40px;
  margin: 1rem 0;
  font-family: "Titillium Web", sans-serif;

  a {
    color: white;
    font-size: 1.2em;
  }
`

const PageSubNav = () => {
  return (
    <PageSubNavContainer>
      <a className="sub-nav-link">Features</a>
      <a className="sub-nav-link">Specifications</a>
      <a className="sub-nav-link">Options</a>
    </PageSubNavContainer>
  )
}

export default PageSubNav
