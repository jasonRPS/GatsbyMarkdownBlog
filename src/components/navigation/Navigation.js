import React from "react"
import {
  MainNavLinksStyles,
  MobileNavLayout,
} from "./styles/MainNavLinksStyles"
import { Link } from "gatsby"
import Logo from "../../images/factory-cat-nav-logo.png"
import { useState } from "react"
import MobileNavigation from "./MobileNavigation"
import WalkBehindIcon from "../../images/walkie-icon.jpg"
import RiderIcon from "../../images/rider-icon.jpg"
import { withTheme } from "styled-components"

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
                PRODUCTS{" "}
                <i
                  style={{ color: "white" }}
                  className="fas fa-sort-down down-arrow"
                ></i>
                <div className="dropdown-content">
                  <ul>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/walk-behind-floor-scrubbers"
                    >
                      <li>
                        <img src={WalkBehindIcon} alt="" width="25px" />
                        <span> Walk Behind Scrubbers</span>
                      </li>
                    </Link>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/walk-behind-floor-sweepers"
                    >
                      <li>Walk Behind Sweepers</li>
                    </Link>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/ride-on-scrubbers"
                    >
                      <li>
                        <img src={RiderIcon} alt="" width="25px" />
                        <span> Ride On Scrubbers</span>
                      </li>
                    </Link>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/ride-on-sweepers"
                    >
                      <li>Ride On Sweepers</li>
                    </Link>

                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/sweeper-scrubbers"
                    >
                      <li>Sweeper-Scrubbers</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                SUPPORT{" "}
                <i
                  style={{ color: "white" }}
                  className="fas fa-sort-down down-arrow"
                ></i>
                <div className="dropdown-content">
                  <ul>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/downloads"
                    >
                      <li>
                        <i className="fas fa-download" />
                        <span> Downloads</span>
                      </li>
                    </Link>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/contact"
                    >
                      <li>
                        <i className="fas fa-phone" />
                        <span> Contact Us</span>
                      </li>
                    </Link>
                    {/* <li>Ride On Sweepers</li>
                    <li>Ride On Scrubbers</li>
                    <li>Sweeper-Scrubbers</li> */}
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                MEDIA{" "}
                <i
                  style={{ color: "white" }}
                  className="fas fa-sort-down down-arrow"
                ></i>
                <div className="dropdown-content">
                  <ul>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/images"
                    >
                      <li>
                        <i className="far fa-images" />
                        <span> Images</span>
                      </li>
                    </Link>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/videos"
                    >
                      <li>
                        <i className="fas fa-video" />
                        <span> Videos</span>
                      </li>
                    </Link>
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/applications"
                    >
                      <li>
                        <i className="fas fa-image" />
                        <span> Applications</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              {/* <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/media"
              >
                <li className="dropdown">MEDIA</li>
              </Link> */}
            </ul>
          </div>

          <div id="login">
            <i className="far fa-user" />
            <p>Login</p>
          </div>
          <div id="phone-number">
            <i className="fas fa-phone"> </i>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:1.800.634.4060"
            >
              {" "}
              1.800.634.4060
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
