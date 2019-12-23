import React from "react"
import { MainNavLinksStyles } from "./styles/MainNavLinksStyles"
import { Link } from "gatsby"
import Logo from "../../images/factory-cat-logo.png"

const MainNavLinks = () => {
  return (
    <MainNavLinksStyles>
      <div id="nav-links-container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul>
          <li>Machines</li>
          <li>Support</li>
          <li>Link1</li>
          <li>Link1</li>
          <li>Link1</li>
        </ul>
        <div id="search">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
        <div id="login">
          <i className="far fa-user" />
          <p>Login</p>
        </div>
      </div>
    </MainNavLinksStyles>
  )
}

export default MainNavLinks
