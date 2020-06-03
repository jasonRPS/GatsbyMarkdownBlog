import React from "react"
import {
  MainNavLinksStyles,
  MobileNavLayout,
} from "./styles/MainNavLinksStyles"
import { Link } from "gatsby"
import Logo from "../../images/factory-cat-nav-logo.png"
import { useState } from "react"
import MobileNavigation from "./MobileNavigation"

const Navigation = () => {
  const [toggleBtn, setToggleBtn] = useState("fas fa-bars")
  const [mobileMenu, setMobileMenu] = useState("-370px")

  function toggleMobileNav() {
    let bars = "fas fa-bars"
    let x = "fas fa-times"

    if (toggleBtn === bars) {
      setToggleBtn(x)
      setMobileMenu("0")
    } else {
      setToggleBtn(bars)
      setMobileMenu("-370px")
    }
  }
  return (
    <>
      <MainNavLinksStyles>
        <div id="nav-links-container">
          <div id="mobile-button">
            <i onClick={toggleMobileNav} className={toggleBtn}></i>
          </div>
          <div id="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div id="middle">
            <ul className="main-links">
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                <li className="dropdown">HOME</li>
              </Link>
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
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/walk-behind-floor-scrubbers"
                    >
                      <li>Walk Behind Scrubbers</li>
                    </Link>
                    <li>Ride On Sweepers</li>
                    <li>Ride On Scrubbers</li>
                    <li>Sweeper-Scrubbers</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                SUPPORT <i className="fas fa-sort-down down-arrow"></i>
                <div className="dropdown-content">
                  <ul>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/walk-behind-floor-sweepers"
                    >
                      <li>Download Manuals</li>
                    </Link>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/walk-behind-floor-scrubbers"
                    >
                      <li>Contact Us</li>
                    </Link>
                    {/* <li>Ride On Sweepers</li>
                    <li>Ride On Scrubbers</li>
                    <li>Sweeper-Scrubbers</li> */}
                  </ul>
                </div>
              </li>
              <li className="dropdown">MEDIA</li>
            </ul>
          </div>

          <div id="login">
            <i className="far fa-user" />
            <p>Sign Up / Login</p>
          </div>
          <div id="phone-number">
            <i className="fas fa-phone"> </i>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:555-555-5555"
            >
              {" "}
              555-555-5555
            </a>
          </div>
        </div>
      </MainNavLinksStyles>
      <MobileNavLayout style={{ marginLeft: mobileMenu }}>
        <MobileNavigation />
      </MobileNavLayout>
    </>
  )
}

export default Navigation
