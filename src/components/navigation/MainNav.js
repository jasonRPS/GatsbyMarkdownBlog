import React, { Component } from "react"
import MainNavLinks from "./MainNavLinks"
import styled from "styled-components"

const MainNavStyles = styled.div`
  background: #3e3e3b;
  /* height: 50px; */
  padding: 0.5rem 0;
  width: 100%;
`

class MainNav extends Component {
  render() {
    return (
      <MainNavStyles>
        <MainNavLinks />
      </MainNavStyles>
    )
  }
}

export default MainNav