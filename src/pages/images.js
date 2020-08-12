import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import MiniHdImageQuery from "../components/MiniHdImageQuery"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import HeroHeader from "../components/HeroHeader"
import WalkieScrubberImages from "../components/WalkieScrubbersImages"
import WalkieSweepersImages from "../components/WalkieSweepersImages"
import RideOnFloorScrubberImages from "../components/RideOnFloorScrubberImages"
import RideOnFloorSweeperImages from "../components/RideOnFloorSweeperImages"

const StyledNavContainer = styled.div`
  max-width: 1400px;
  margin: 4rem auto;
  display: flex;
  justify-content: space-evenly;
`
const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
    transition-duration: 0.3s;
  }
`

const ImagePage = () => (
  <Layout>
    <HeroHeader
      heroImage={HeroImage}
      title="FactoryCat Image Gallery"
      subHeading="Browse our gallery of images"
      buttonTitle="See Images"
      goTo="#page-scroll"
    />

    <div id="page-scroll"></div>
    <StyledNavContainer>
      <a href="#walkie-scrubbers">
        <Button>Walk Behind Floor Scrubbers</Button>
      </a>
      <a href="#walkie-sweepers">
        <Button>Walk Behind Floor Sweepers</Button>
      </a>
      <a href="#ride-on-scrubbers">
        <Button>Ride On Floor Scrubbers</Button>
      </a>
      <a href="#ride-on-sweepers">
        <Button>Ride On Floor Sweepers</Button>
      </a>
    </StyledNavContainer>

    <div id="walkie-scrubbers"></div>
    <WalkieScrubberImages />
    {/* <div id="walkie-sweepers"></div>
    <WalkieSweepersImages />
    <div id="ride-on-scrubbers"></div>
    <RideOnFloorScrubberImages />
    <div id="ride-on-sweepers"></div>
    <RideOnFloorSweeperImages /> */}
  </Layout>
)

export default ImagePage
