import React from "react"
import { MainNavLinksStyles } from "./styles/MainNavLinksStyles"
import Img from "gatsby-image"
import Logo from "../../images/factory-cat-logo.png"

const MainNavLinks = () => {
  return (
    <MainNavLinksStyles>
      <div id="nav-links-container">
        <img src={Logo} alt="" />
        <ul>
          <li>Machines</li>
          <li>Link1</li>
          <li>Link1</li>
          <li>Link1</li>
          <li>Link1</li>
        </ul>
        <div id="search">
          <input type="text" />
        </div>
        <div id="login">
          <p>Login</p>
        </div>
      </div>
    </MainNavLinksStyles>
  )
}

export default MainNavLinks
