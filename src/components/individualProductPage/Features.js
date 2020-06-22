import React from "react"
import styled from "styled-components"

import Section1background from "./images/mini-hd-specs-static-no-text-no-machine.png"

const FeaturesContainer = styled.div`
  width: 90%;
  margin: 2rem auto;

  .section-sizing {
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Section1 = styled.div`
  position: relative;
  /* display: flex; */
  justify-content: space-between;
  background-image: url(${Section1background});

  .info-text {
    position: absolute;
    top: 50px;
    left: 10%;
    color: white;
    text-align: center;
    font-family: "Titillium Web", sans-serif;
  }

  .machine-image {
    position: absolute;
    right: 2%;
  }

  .spec-container {
    text-align: left;
    display: flex;

    ul {
      list-style-type: none;
    }
  }
`

const Features = props => {
  return (
    <FeaturesContainer>
      <Section1 className="section-sizing">
        <div className="info-text">
          <h1 style={{ margin: "0", fontSize: "3em" }}>Mini-HD</h1>
          <h3
            style={{
              borderBottom: "5px solid red",
              padding: "0 4rem",
              margin: "0",
              fontSize: "2em",
            }}
          >
            Walk Behind Floor Scrubber
          </h3>
          <div className="spec-container">
            <ul>
              <li style={{ fontWeight: "bold", fontSize: "1.3em" }}>
                Cleaning Path:
              </li>
              <li style={{ fontSize: "1.5em" }}>20-29"</li>
              <li
                style={{
                  fontStyle: "italic",
                  color: "darkgrey",
                  lineHeight: "10px",
                }}
              >
                (51-73)
              </li>
            </ul>
            <ul>
              <li style={{ fontWeight: "bold", fontSize: "1.3em" }}>
                Run Time:
              </li>
              <li style={{ fontSize: "1.5em" }}>2.5 Hours</li>
              <li
                style={{
                  fontStyle: "italic",
                  color: "darkgrey",
                  lineHeight: "10px",
                }}
              >
                Battery Life
              </li>
            </ul>
            <ul>
              <li style={{ fontWeight: "bold", fontSize: "1.3em" }}>
                Tank Capacity:
              </li>
              <li style={{ fontSize: "1.5em" }}>
                Solution: 16 Gal{" "}
                <span style={{ fontStyle: "italic", color: "darkgrey" }}>
                  (60L)
                </span>
              </li>
              <li style={{ fontSize: "1.5em" }}>
                Recovery: 16 Gal{" "}
                <span style={{ fontStyle: "italic", color: "darkgrey" }}>
                  (60L)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="machine-image">
          <img src={props.profileImage} alt={props.profileAlt} height="340px" />
        </div>
      </Section1>
    </FeaturesContainer>
  )
}

export default Features
