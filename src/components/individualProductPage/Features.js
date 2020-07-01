import React from "react"
import styled from "styled-components"

import Section1background from "./images/mini-hd-specs-static-no-text-no-machine.png"
import USASectionBackground from "./images/mini-hd-handmade-usa-static-no-text.png"
import HeavyDutyBackground from "./images/mini-hd-heavy-duty-cleaning-no-text.png"
import Specifications from "./Specifications"

const FeaturesContainer = styled.div`
  width: 90%;
  margin: 2rem auto;

  .section-sizing {
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0.3rem 0;

    @media (max-width: 1430px) {
      height: 33vh;
    }
    @media (max-width: 1000px) {
      height: 25vh;
    }
    @media (max-width: 700px) {
      height: 50vh;
      margin: 3rem 0;
    }
  }
`

const Section1 = styled.div`
  position: relative;
  justify-content: space-between;
  background-image: url(${Section1background});

  .info-text {
    position: absolute;
    top: 50px;
    left: 10%;
    color: white;
    text-align: center;
    font-family: "Titillium Web", sans-serif;

    @media (max-width: 1430px) {
      top: 0;
      left: 30px;
    }

    @media (max-width: 1000px) {
      top: 0;
      left: 10px;
    }

    h1 {
      margin: 0;
      font-size: 3em;
      @media (max-width: 1000px) {
        font-size: 2em;
      }
    }

    h3 {
      border-bottom: 5px solid red;
      padding: 0 4rem;
      margin: 0;
      font-size: 2em;

      @media (max-width: 1000px) {
        font-size: 1.5em;
        padding: 0;
        /* border-bottom: none; */
      }
    }

    ul {
      @media (max-width: 1000px) {
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.5rem;
      }
    }
  }

  .machine-image {
    position: absolute;
    right: 2%;
    @media (max-width: 1430px) {
      top: 50px;
    }

    @media (max-width: 700px) {
      top: 180px;
    }

    img {
      @media (max-width: 1430px) {
        width: 300px;
        height: auto;
      }
    }
  }

  .spec-container {
    text-align: left;
    display: flex;

    ul {
      list-style-type: none;
    }
  }
`

const VideoSection = styled.div`
  position: relative;
  background-color: black;

  .video-text {
    position: absolute;
    top: 5%;
    left: 10%;
    font-family: "Titillium Web", sans-serif;
    color: white;

    @media (max-width: 1430px) {
      top: 20px;
      left: 5%;
    }

    @media (max-width: 720px) {
      display: none;
    }

    h1 {
      font-size: 3.5em;
      margin: 0;
      @media (max-width: 1430px) {
        font-size: 2em;
      }
    }

    ul {
      font-size: 1.5em;
      @media (max-width: 1430px) {
        font-size: 1.3em;
      }
    }
  }
  .video-container {
    position: absolute;
    top: 50%;
    margin-top: -157.5px;
    right: 50px;
    color: white;
    @media (max-width: 1430px) {
      margin: 0;
      top: 0;
      right: 10px;
    }
    @media (max-width: 720px) {
      /* position: relative; */
      width: 100%;
      height: 100%;
      right: 0;
    }

    iframe {
      width: 560px;
      height: 315px;
      @media (max-width: 1430px) {
        width: 460px;
        height: 250px;
      }
      @media (max-width: 1000px) {
        width: 360px;
        height: 250px;
      }
      @media (max-width: 720px) {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
  }
`

const USASection = styled.div`
  position: relative;
  background-image: url(${USASectionBackground});

  h2 {
    font-family: "Titillium Web", sans-serif;
    width: 350px;
    position: absolute;
    top: 50px;
    left: 80px;
    color: white;
    margin: 0;
    font-size: 7em;
    line-height: 100px;

    @media (max-width: 1030px) {
      top: 20px;
    }
    @media (max-width: 1000px) {
      /* top: 0; */
      font-size: 5em;
    }
    @media (max-width: 720px) {
      /* top: 0; */
      font-size: 4em;
      text-align: center;
      top: 40px;
      left: 0;
    }
  }
`

const HeavyDutySection = styled.div`
  position: relative;
  background-image: url(${HeavyDutyBackground});

  h2 {
    font-family: "Titillium Web", sans-serif;
    text-align: right;
    width: 350px;
    position: absolute;
    top: 50%;
    margin-top: -157px;
    right: 100px;
    color: white;
    font-size: 7em;
    line-height: 100px;

    @media (max-width: 1030px) {
      font-size: 4.5em;
      right: 20px;
      line-height: 80px;
      top: 60%;
    }
    @media (max-width: 720px) {
      width: 100%;
      right: 0;
      left: 0;
      font-size: 5em;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
    }
  }
`

const Features = props => {
  return (
    <FeaturesContainer>
      <Section1 className="section-sizing">
        <div className="info-text">
          <h1>Mini-HD</h1>
          <h3>Walk Behind Floor Scrubber</h3>
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
      <VideoSection className="section-sizing">
        <div className="video-text">
          <h1>Key Benefits</h1>
          <ul>
            <li>High Performance Motors</li>
            <li>Vacuum Muffler</li>
            <li>Simple Control Panel</li>
            <li>Vacuum Protection System</li>
          </ul>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/MGY_5uGwfs0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </VideoSection>
      <USASection className="section-sizing">
        <h2>Handmade In USA</h2>
      </USASection>
      <Specifications />
      <HeavyDutySection className="section-sizing">
        <h2>Heavy Duty Cleaning</h2>
      </HeavyDutySection>
    </FeaturesContainer>
  )
}

export default Features
