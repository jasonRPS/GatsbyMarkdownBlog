import React, { useState, useRef } from "react"
import styled from "styled-components"
import MiniHD1Image from "./images/mini-hd1.jpg"
import MiniHD12mage from "./images/mini-hd2.jpg"
import MiniHD13mage from "./images/mini-hd3.jpg"
import Image1 from "./images/IMG_0995.jpg"
import Image2 from "./images/IMG_0997.jpg"
import Image3 from "./images/IMG_1304.jpg"
import Image4 from "./images/IMG_1324.jpg"
import Image5 from "./images/IMG_2735.jpg"
import Image6 from "./images/IMG_2736.jpg"
import Image7 from "./images/IMG_2869.jpg"
import Image8 from "./images/IMG_2995.jpg"
import Image9 from "./images/IMG_2996.jpg"
import Image10 from "./images/IMG_2869.jpg"

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1400px;
  margin: 2rem auto;
`
const ImageButton = styled.button`
  min-width: 80px;
  background: transparent;
  /* color: white; */
  padding: 0.5rem;
  /* border: 1px solid black; */
  cursor: pointer;
  /* border-radius: 8px; */
  border: 2px solid black;

  &:hover {
    background: red;
    color: white;
    transition: 0.5s;
  }
`

const SubNavContainer = styled.div`
  max-width: 1400px;
  margin: 0.3rem auto;

  .sub-nav {
    display: flex;
    justify-content: space-around;

    p {
      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
`

const ImageContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: space-around;

  .thumbnail {
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 10px 0;
  }
`

const ImageGallery = () => {
  // const [imgDisplay, setImageDisplay] = useState({
  //   displayAll: "block",
  //   displayWalkieScrubbers: "block",
  //   displayWalkieSweepers: "block",
  //   displayRideOnScrubbers: "block",
  //   displayRideOnSweepers: "block",
  //   displaySweeperScrubbers: "block",
  // })

  // const [nav, setNav] = useState({
  //   activeAll: "",
  //   activeWalkieScrubbers: "",
  //   activeWalkieSweepers: "",
  //   activeRideOnScrubbers: "",
  //   activeRideOnSweepers: "",
  //   activeSweeperScrubbers: "",
  // })
  // const [subNav, setSubNav] = useState({
  //   walkieScrubbers: "flex",
  //   walkieSweepers: "none",
  //   rideOnScrubbers: "none",
  //   rideOnSweepers: "none",
  //   sweeperScrubbers: "none",
  // })

  //   function FilterWalkieScrubbers(e) {
  //     let scrubbers = dataSet.category
  //     scrubbers === "walk-behind-scrub"
  //       ? setImageDisplay({ displayAll: "none" })
  //       : setImageDisplay({ displayAll: "block" })
  //   }

  return (
    <>
      <ButtonsContainer>
        <ImageButton>All</ImageButton>
        <ImageButton>Walk Behind Floor Scrubbers</ImageButton>
        <ImageButton>Walk Behind Floor Sweepers</ImageButton>
        <ImageButton>Ride On Floor Scrubbers </ImageButton>
        <ImageButton>Ride On Floor Sweepers</ImageButton>
        <ImageButton>Sweeper-Scrubbers</ImageButton>
      </ButtonsContainer>
      <SubNavContainer>
        <div
          className="sub-nav"
          id="walk-behind-scrubber-sub"
          //style={{ display: subNav.walkieScrubbers }}
        >
          <p>MicroMag</p>
          <p>MicroMini</p>
          <p>Micro-HD</p>
          <p>Mini-HD</p>
          <p>Mag-HD</p>
        </div>
      </SubNavContainer>
      <ImageContainer>
        <img
          data-category=""
          data-model=""
          // style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image1}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model="mini-hd"
          // style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={MiniHD1Image}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model="mini-hd"
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={Image2}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model=""
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={Image3}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model=""
          // style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={MiniHD12mage}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image4}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image1}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model=""
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={Image5}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model=""
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={Image6}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image7}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model=""
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={MiniHD13mage}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image8}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image9}
          alt=""
        />
        <img
          data-category=""
          data-model=""
          //style={{ display: imgDisplay.displayAll }}
          className="thumbnail"
          src={Image10}
          alt=""
        />
        <img
          data-category="walk-behind-scrub"
          data-model="mini-hd"
          //style={{ display: imgDisplay.displayWalkieScrubbers }}
          className="thumbnail"
          src={Image3}
          alt=""
        />
      </ImageContainer>
    </>
  )
}

export default ImageGallery
