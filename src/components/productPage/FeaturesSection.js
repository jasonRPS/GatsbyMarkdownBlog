import React from "react"
import styled from "styled-components"
import HeaderImage from "../../images/mini-hd-feature-header.jpg"
import MachineImage from "../../images/mini-hd-test-left.png"
import ImageVertical from "../../images/imgVert.jpg"
import ImageVertical2 from "../../images/imageTestVert2.jpg"
import ImageVertical3 from "../../images/fc-image2.jpg"

const FeaturesStyles = styled.div`
  #features-container {
    background-color: white;

    width: 90%;
    margin: 2rem auto;

    .feature-info {
      display: flex;
      justify-content: space-evenly;
    }

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

  .feature-image {
    position: relative;
    width: 95%;
    padding-top: 30px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .header-info {
      position: absolute;
      width: 600px;
      text-align: center;
      font-weight: bold;
      color: white;
      top: 70px;
      left: 100px;

      h1 {
        margin: 0;
      }

      h3 {
        margin: 0;
      }
    }

    .header-sub-info-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      h2 {
        margin: 0;
      }

      h3 {
        margin: 0;
      }
    }

    .machine-image {
      position: absolute;
      top: 40px;
      right: 100px;
      width: 300px;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translateX(180deg);
      }
    }
  }

  #feature-images-with-info-container {
    width: 95%;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: 32.3% 32.3% 32.3%;
    grid-gap: 20px;
    justify-content: space-evenly;
    color: white;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: -ms-flexbox;
    }
  }

  .up-arrow-container {
    position: relative;
    /* width: 100%; */
    background-color: #ed2024;
    padding: 2rem;
  }

  .up-arrow-container:before {
    border-bottom: 10px solid red;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    content: "";
    height: 0;
    left: 0;
    top: -10px;
    /* margin-left: 20%; */
    position: absolute;
    width: 0;
    /* transform: rotate(180deg);
    transition-duration: 0.4s; */
  }

  .feature-sections {
    height: 600px;
    display: flex;
    flex-direction: column;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 33.3%;
    }

    .feature-top {
      position: relative;
      height: 50%;
      background-color: #ed2024;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .feature-bottom {
      position: relative;
      height: 50%;
      background-color: #ed2024;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .featured-text {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  /* .up-arrow {
    height: 50px;
    background-color: green;
  } */

  .up-arrow:before {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: -50px;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 100px solid #ed2024;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
  }

  /* #ed2024 */

  .down-arrow {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: -50px;
    width: 0;
    height: 0;
    border-bottom: 100px solid #ed2024;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    transform: rotate(180deg);
    z-index: 2;
  }
`

const FeaturesSection = () => {
  return (
    <FeaturesStyles>
      <div id="features-container">
        <div className="feature-image">
          <img src={HeaderImage} alt="" />
          <div className="header-info">
            <h1>Mini-HD</h1>
            <h3>Walk Behind Floor Scrubber</h3>
            <hr />
            <div className="header-sub-info-container">
              <div className="sub-info">
                <h3>Cleaning Path</h3>
                <h2>20 - 28in </h2>
                <h3>(51 - 71cm)</h3>
              </div>
              <div className="sub-info">
                <h3>Up To</h3>
                <h2>2.5 Hours</h2>
                <h3>Battery Life</h3>
              </div>
              <div className="sub-info">
                <h3>Tank Capacity</h3>
                <h2>Solution: 16gal (60l)</h2>
                <h3>Recovery: 16gal (60l)</h3>
              </div>
            </div>
          </div>

          <div className="machine-image">
            <img src={MachineImage} alt="" />
          </div>
        </div>

        <div id="feature-images-with-info-container">
          <div className="feature-sections">
            <div className="feature-top">
              <img src={ImageVertical} alt="" />
            </div>
            <div className="feature-bottom">
              <div className="up-arrow"></div>
              <div className="featured-text">
                <h2>
                  Equipped with a Traction drive which includes a powerful
                  all-gear transaxle for climbing ramps and max operator ease.
                </h2>
              </div>
            </div>
          </div>
          <div className="feature-sections">
            <div className="feature-top">
              <div className="featured-text">
                <div className="down-arrow"></div>
                <h2>
                  The deck is protected by steel guards and large polyurethane
                  rollers to keep the unit from marking walls.
                </h2>
              </div>
            </div>
            <div className="feature-bottom">
              <img src={ImageVertical3} alt="" />
            </div>
          </div>
          <div className="feature-sections">
            <div className="feature-top">
              <img src={ImageVertical2} alt="" />
            </div>
            <div className="feature-bottom">
              <div className="featured-text">
                <div className="up-arrow"></div>
                <h2>
                  Simple design and durable construction, offering unmatched
                  value for the customer.
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="top-feature-container">
            <div>
              <div>
                <img src={ImageVertical} alt="" />
              </div>
              <div className="up-arrow-container">
                <h3>Powerful</h3>
                <ul>
                  <li>
                    all-gear transaxle for climbing ramps and max operator ease.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-feature-section">
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div className="up-arrow-container">
                <h3>Powerful</h3>
                <ul>
                  <li>
                    all-gear transaxle for climbing ramps and max operator ease.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-feature-section">
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div className="up-arrow-container">
                <h3>Powerful</h3>
                <ul>
                  <li>
                    all-gear transaxle for climbing ramps and max operator ease.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <div className="feature-info">
          <ul>
            <li>Test Lamps, Ballast and Pins: Complete 3-in-1 solution</li>
            <li>Non-conductive antenna sleeve allows for safe testing</li>
            <li>Visual and audible tool feedback to easily confirm testing</li>
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
      </div>
    </FeaturesStyles>
  )
}
export default FeaturesSection
