import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import MiniHdImageQuery from "../components/MiniHdImageQuery"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import HeroHeader from "../components/HeroHeader"
import WalkieScrubberImages from "../components/WalkieScrubbersImages"

const StyledNavContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
`
const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: 2px solid black;
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
    />
    <StyledNavContainer>
      <Button>Walk Behind Floor Scrubbers</Button>
      <Button>Walk Behind Floor Sweepers</Button>
      <Button>Ride On Floor Scrubbers</Button>
      <Button>Ride On Floor Sweepers</Button>
    </StyledNavContainer>
    <WalkieScrubberImages />
  </Layout>
)

export default ImagePage
