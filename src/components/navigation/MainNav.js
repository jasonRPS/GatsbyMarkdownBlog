import React, { Component } from "react"
import MainNavLinks from "./MainNavLinks"
import styled from "styled-components"

const MainNavStyles = styled.div`
  position: fixed;
  background: #c64247;
  /* height: 50px; */
  padding: 0.5rem 0;
  width: 100%;
  z-index: 5;
  box-shadow: 0 10px 20px black;
  margin-bottom: 20px;
`

class MainNav extends Component {
  render() {
    return (
      <>
        <MainNavStyles>
          <MainNavLinks />
        </MainNavStyles>
      </>
    )
  }
}

export default MainNav
