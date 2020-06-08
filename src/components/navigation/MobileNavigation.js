import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileNavStyles = styled.div`
  width: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  /* border: 10px double #ed2024; */
  height: 500px;
  border-right-style: double;
  border-bottom-style: double;
  border-color: #ed2024;
  border-width: 10px;
  border-bottom-right-radius: 90px;
  color: white;
  font-size: 1.5em;

  ul {
    margin: 0;
    list-style-type: none;
    border-bottom: 1px solid #ed2024;

    li {
      padding: 1rem;
    }
  }

  select {
    padding: 0;
    font-size: 1em;
    border: none;
    background: transparent;
    color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }

  option {
  }
`

const MobileNavigation = () => {
  const handleSelect = e => {
    window.location = e.target.value
  }
  return (
    <MobileNavStyles>
      <ul>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <select onChange={handleSelect} id="products">
            <option disabled selected value="0">
              Products
            </option>
            <option value="/walk-behind-floor-scrubbers">
              Walk Behind Scrubbers
            </option>
            <option value="/walk-behind-floor-sweepers">
              Walk Behind Sweepers
            </option>
            <option value="/ride-on-scrubbers">Ride On Scrubbers</option>
            <option value="/ride-on-sweepers">Ride On Sweepers</option>
            <option value="sweeper-scrubbers">Sweeper-Scrubber</option>
          </select>
        </li>
        <li>
          <select onChange={handleSelect} name="support">
            <option disabled selected value="0">
              Support
            </option>
            <option value="/downloads">Manual Downloads</option>
            <option value="/contact">Contact</option>
          </select>
        </li>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/media">
            Media
          </Link>
        </li>
      </ul>
      <div
        style={{ padding: "1rem", marginLeft: "2.3rem" }}
        className="mobile-login"
      >
        <i className="far fa-user" /> Login
      </div>
      <div className="mobile-call-button">
        <button>
          <i className="fas fa-phone"> Call Us</i>
        </button>
      </div>
    </MobileNavStyles>
  )
}

export default MobileNavigation
