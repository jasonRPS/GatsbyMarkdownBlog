import React from "react"
import { MainNavLinksStyles } from "./styles/MainNavLinksStyles"
import { Link } from "gatsby"
import Logo from "../../images/factory-cat-nav-logo.png"

const MainNavLinks = () => {
  return (
    <MainNavLinksStyles>
      <div id="nav-links-container">
        <div id="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            Products <i className="fas fa-sort-down down-arrow"></i>
          </li>
          <li>
            Support <i className="fas fa-sort-down down-arrow"></i>
          </li>
          <li>Innovations</li>
          <li>
            <i className="fas fa-search"></i>
          </li>
        </ul>

        <div id="login">
          <i className="far fa-user" />
          <p>Sign Up / Login</p>
        </div>
        <div id="shopping">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </MainNavLinksStyles>
  )
}

export default MainNavLinks
