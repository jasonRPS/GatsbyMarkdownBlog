import React from "react"

import styled from "styled-components"

const FooterCSS = styled.footer`
  /* position: absolute; */
  width: 100%;
  min-height: 60px;
  color: whitesmoke;
  background-color: #333;
  margin: 0;

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.5rem;

    ul {
      list-style-type: none;
    }

    button {
      background-color: red;
      color: white;
      padding: 0.5rem;
      border: none;
      margin: 1rem;
    }

    label {
      margin: 0.5rem 0;
    }
    input {
      margin: 0.5rem 0;
    }
    select {
      margin: 0.5rem 0;
    }

    li {
      margin: 0.5rem 0;
    }

    i {
      font-size: 1.2em;
    }
  }
`

const Footer = () => {
  return (
    <FooterCSS>
      <div className="footer-container">
        <ul>
          <h3>Customer Service</h3>
          <li>1-555-555-5555</li>
        </ul>
        <ul>
          <h3>Products</h3>
          <li>Walk Behind Sweepers</li>
          <li>Walk Behind Scrubbers</li>
          <li>Ride On Sweepers</li>
          <li>Ride On Scrubbers</li>
          <li>Sweeper Scrubbers</li>
        </ul>
        <ul>
          <h3>Support</h3>
          <li>Contact Us</li>
          <li>Download Manuals</li>
        </ul>
        <ul>
          <h3>About FactorCat</h3>
          <li>About Us</li>
          <li>Blog</li>
        </ul>
        <ul>
          <form>
            <h3>FactoryCat Newsletter</h3>
            <label for="first-name">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input type="text" name="first-name" />
            <br />
            <label for="email">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input type="email" name="email" />
            <br />
            <label for="industry">
              Industry <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <select name="industry">
              <option>Distributor</option>
              <option>Education</option>
              <option>Government</option>
              <option>Healthcare</option>
              <option>Hospitality</option>
              <option>Logistics/Warehouse</option>
              <option>Manufacturing</option>
              <option>Office</option>
              <option>Other</option>
              <option>Outdoor</option>
              <option>Public Venues</option>
              <option>Raw Material</option>
              <option>Rental</option>
              <option>Retail</option>
              <option>Transportation</option>
            </select>
            <br />
            <button>Sign Up</button>
          </form>
        </ul>
        <ul>
          <h3>Connect with Us</h3>
          <li>
            <i style={{ color: "#4267B2" }} className="fab fa-facebook-square">
              {" "}
              <span style={{ color: "white" }}> Facebook</span>
            </i>
          </li>
          <li>
            <i style={{ color: "#833AB4" }} className="fab fa-instagram">
              {" "}
              <span style={{ color: "white" }}> Instagram</span>
            </i>
          </li>
          <li>
            <i style={{ color: "#2867b2" }} className="fab fa-linkedin">
              {" "}
              <span style={{ color: "white" }}> LinkedIn</span>
            </i>
          </li>
          <li>
            <i style={{ color: "#1DA1F2" }} className="fab fa-twitter-square">
              {" "}
              <span style={{ color: "white" }}> Twitter</span>
            </i>
          </li>
          <li>
            <i style={{ color: "#FF0000" }} className="fab fa-youtube-square">
              {" "}
              <span style={{ color: "white" }}> You Tube</span>
            </i>
          </li>
        </ul>
      </div>
    </FooterCSS>
  )
}

export default Footer
