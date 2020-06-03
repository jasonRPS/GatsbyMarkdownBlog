import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroImage from "../images/walk-behind-scrubber-hero.jpg"
import styled from "styled-components"
import SeeMoreButton from "../components/controls/SeeMoreButton"
import ProductCard from "../components/ProductCard"
import MiniHDImage from "../images/mini-hd-test.png"

const WbfsPageStyles = styled.div`
  .hero-container {
    position: relative;
    width: 100%;
    height: 80vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .heading {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: 3rem 0;
    font-size: 2em;
    font-weight: bold;
    color: white;
    position: absolute;
    bottom: 30%;
    text-align: center;

    h1 {
      margin: 0;
    }
  }

  .product-layout {
    margin-top: 150px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

const WalkBehindFloorScrubbers = () => {
  return (
    <>
      <SEO title="Walk Behind Floor Scrubbers" />
      <Layout>
        <WbfsPageStyles>
          <div id="walk-behind-page"></div>
          <div className="hero-container">
            <img src={HeroImage} alt="" />
          </div>
          <div className="heading">
            <h1>Walk Behind Floor Scrubbers</h1>
            <SeeMoreButton title="See Machines" goTo="#mydiv" />
          </div>
          <div className="product-layout" id="mydiv">
            <ProductCard
              image={MiniHDImage}
              name="Mini-HD"
              tank="Sol: 11gal (42l) Rec: 12gal (45l)"
              size="17 - 20in (43 - 51cm)"
              time="Up to 2.5 hours"
            />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </WbfsPageStyles>
      </Layout>
    </>
  )
}

export default WalkBehindFloorScrubbers
