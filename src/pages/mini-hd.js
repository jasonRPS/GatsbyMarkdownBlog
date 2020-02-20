import React, { useState } from "react"
import Layout from "../components/Layout"
import ProductInfo from "../components/ProductInfo"
import styled from "styled-components"
import SeeMoreButton from "../components/controls/SeeMoreButton"
import MiniHDImage from "../images/mini-hd-test.png"
import { If } from "rc-if-else"

const MiniHDPageStyles = styled.div`
  #product-container {
    width: 90%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  #spec-nav {
    position: sticky;
    top: 60px;
    width: 100%;
    height: 50px;
    z-index: 2;
    background-color: #2d2d2d;

    ul {
      display: flex;
      justify-content: space-around;

      list-style-type: none;
      color: white;
      margin: 0;

      li {
        margin-top: 1.2rem;
        font-size: 1.2em;
      }
    }
  }

  #spec-section {
    position: relative;
    background-color: whitesmoke;
    width: 100%;
    height: 1000px;

    #features {
      position: absolute;
      background-color: white;
      display: flex;
      width: 70%;
      margin: 2rem auto;
      left: 50%;
      margin-left: -35%;
      justify-content: space-evenly;

      ul {
        li {
          font-size: 1.2em;
          margin: 1rem 1rem;
          list-style-type: none;
        }

        li:before {
          content: "\f058";
          font-size: 1.5em;
          font-family: "Font Awesome 5 Free";
          color: red;
          margin-left: -20px;
          margin-right: 10px;
        }
      }
    }
  }

  #product-spec-section {
    position: absolute;
    top: 350px;
    background-color: white;
    width: 70%;
    margin: 2rem auto;
    left: 50%;
    margin-left: -35%;
    padding-bottom: 2rem;
    justify-content: space-evenly;
  }

  .download-links {
    ul {
      margin-left: 1.5rem;
      width: 1000px;
      padding: 0;
      display: flex;
      li {
        font-size: 1em;
        margin-right: 1.5rem;
        list-style-type: none;
        color: #c64247;
      }
    }
  }

  #specs {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .spec-row {
    display: flex;
    border-top: 1px solid black;
    /* margin: 0.5rem; */
    margin-left: 1.5rem;

    /* padding: 0.3rem; */
  }
  .product-specs-cell__title {
    /* margin-left: 1.5rem; */
    min-width: 250px;
    background-color: lightgray;
    font-weight: bold;
    padding: 0.5rem 0.5rem;
  }

  .product-specs-cell {
    padding: 0.5rem 0.5rem;
    margin-right: 1.5rem;
  }

  #options-section {
    position: absolute;
    top: 900px;
    background-color: white;
    width: 70%;
    margin: 2rem auto;
    left: 50%;
    margin-left: -35%;
    padding-bottom: 2rem;

    h3 {
      margin-left: 1.5rem;
    }

    h5 {
      margin-left: 1.5rem;
    }
  }

  #product-scroll {
    position: sticky;
    background-color: white;
    height: 190px;
    top: 60px;
    width: 100%;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: space-around;
    display: none;

    img {
      width: 150px;
    }

    html:not([data-scroll="0"]) #product-scroll {
      display: block;
    }
  }
`

const MiniHDPage = () => {
  const [display, setDisplay] = useState("none")
  const [position, getPosition] = useState("")

  function handleScroll() {
    setDisplay("block")
  }

  return (
    <Layout>
      <MiniHDPageStyles>
        <div id="product-container">
          <ProductInfo />
        </div>

        <div
          style={{ display: display }}
          onScroll={handleScroll}
          id="product-scroll"
        >
          <div id="small-image">
            <img src={MiniHDImage} alt="" />
          </div>
          <div id="small-info">
            <p>Mini HD Walk Behind Floor Scrubber</p>
          </div>
        </div>

        <div id="spec-nav">
          <ul>
            <li>
              <a
                style={{ textDecoration: "none", color: "lightgrey" }}
                href="#features-scroll"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "lightgrey" }}
                href="#product-spec-section"
              >
                SPECIFICATIONS
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "lightgrey" }}
                href="#options-section"
              >
                OPTIONS
              </a>
            </li>
          </ul>
        </div>
        <div id="features-scroll"></div>
        <div id="spec-section">
          <div id="features">
            <ul>
              <li>Test Lamps, Ballast and Pins: Complete 3-in-1 solution</li>
              <li>Non-conductive antenna sleeve allows for safe testing</li>
              <li>
                Visual and audible tool feedback to easily confirm testing
              </li>
              <li>Dial and buttons positioned for one-handed use</li>
            </ul>
            <ul>
              <li>Durable tool that continues to work after a 6.5 foot drop</li>
              <li>
                2.5’ Fully retractable antenna for extended reach when testing
              </li>
              <li>Removable antenna adapter improves lamp test response</li>
              <li>Built-in LED flashlight illuminates dark work spaces</li>
            </ul>
          </div>

          <div id="product-spec-section">
            <div className="download-links">
              <ul>
                <li>
                  <i className="fas fa-download"></i> Download Brochure{" "}
                </li>
                <li>
                  <i className="fas fa-download"></i> Download Technical
                  Specifications{" "}
                </li>
                <li>
                  <i className="fas fa-download"></i> Download Parts Manual{" "}
                </li>
                <li>
                  <i className="fas fa-download"></i> Download Operator Manual
                </li>
              </ul>
              <h3 style={{ marginLeft: "1.5rem" }}>Product Specifications</h3>
              <div id="specs">
                <div className="left-column">
                  <div className="spec-row">
                    <div className="product-specs-cell__title">
                      Tank Material
                    </div>
                    <div className="product-specs-cell">
                      Poly (3/8" (.9525cm)think)
                    </div>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Chassis Construction
                    </span>
                    <span className="product-specs-cell">
                      7-gauge (3/16" Steel) (.47625 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Rear Wheels
                    </span>
                    <span className="product-specs-cell">
                      (2) 14" x 5" (35.5 cm x 13 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Drive Wheel
                    </span>
                    <span className="product-specs-cell">
                      12" x 4" (30.5 cm x 10 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Size (L x W x H)
                    </span>
                    <span className="product-specs-cell">
                      69" x 36" x 56" (175 cm x 91 cm x 142 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Weight (w/o batteries)
                    </span>
                    <span className="product-specs-cell">
                      1,230 lbs. (558 kg)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Weight (w/ 325ah batteries)
                    </span>
                    <span className="product-specs-cell">
                      1,950 lbs. (885 kg)
                    </span>
                  </div>
                </div>
                <div className="right-column">
                  <div className="spec-row">
                    <div className="product-specs-cell__title">
                      Tank Material
                    </div>
                    <div className="product-specs-cell">
                      Poly (3/8" (.9525cm)think)
                    </div>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Chassis Construction
                    </span>
                    <span className="product-specs-cell">
                      7-gauge (3/16" Steel) (.47625 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Rear Wheels
                    </span>
                    <span className="product-specs-cell">
                      (2) 14" x 5" (35.5 cm x 13 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Drive Wheel
                    </span>
                    <span className="product-specs-cell">
                      12" x 4" (30.5 cm x 10 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Size (L x W x H)
                    </span>
                    <span className="product-specs-cell">
                      69" x 36" x 56" (175 cm x 91 cm x 142 cm)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Weight (w/o batteries)
                    </span>
                    <span className="product-specs-cell">
                      1,230 lbs. (558 kg)
                    </span>
                  </div>

                  <div className="spec-row">
                    <span
                      style={{ fontWeight: "bold" }}
                      className="product-specs-cell__title"
                    >
                      Weight (w/ 325ah batteries)
                    </span>
                    <span className="product-specs-cell">
                      1,950 lbs. (885 kg)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="options-section">
            <h3>Options</h3>
            <h5> BATTERY ONLY OPTIONS </h5>
          </div>
        </div>
      </MiniHDPageStyles>
    </Layout>
  )
}

export default MiniHDPage
