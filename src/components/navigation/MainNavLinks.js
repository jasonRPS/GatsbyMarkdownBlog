import React from "react"
import { MainNavLinksStyles } from "./styles/MainNavLinksStyles"
import { Link } from "gatsby"
import Logo from "../../images/factory-cat-nav-logo.png"

const MainNavLinks = () => {
  return (
    <>
      <MainNavLinksStyles>
        <div id="nav-links-container">
          <div id="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="main-links">
            <li className="dropdown">HOME</li>
            <li className="dropdown">
              PRODUCTS <i className="fas fa-sort-down down-arrow"></i>
              <div className="dropdown-content">
                <ul>
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to="/walk-behind-floor-sweepers"
                  >
                    <li>Walk Behind Sweepers</li>
                  </Link>
                  <li>Walk Behind Scrubbers</li>
                  <li>Ride On Sweepers</li>
                  <li>Ride On Scrubbers</li>
                  <li>Sweeper-Scrubbers</li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              SUPPORT <i className="fas fa-sort-down down-arrow"></i>
            </li>
            <li className="dropdown">INNOVATION</li>
            <li className="dropdown">
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
    </>
  )
}

export default MainNavLinks
