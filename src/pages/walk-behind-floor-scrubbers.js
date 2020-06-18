import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import styled from "styled-components"
import SeeMoreButton from "../components/controls/SeeMoreButton"
import ProductLayout from "../components/ProductLayout"

import MicroMagImage from "../images/micromag-17-traction-1.png"
import MiniHDImage from "../images/mini-hd-26D-1.jpg"

const WbfsPageStyles = styled.div`
  .hero-container {
    position: relative;
    /* padding-top: 57px; */
    width: 100%;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .heading {
    position: absolute;
    top: 50%;
    margin-top: -160px;
    width: 100%;
    /* background: rgba(0, 0, 0, 0.7); */
    padding: 3rem 0;
    font-size: 2em;
    font-weight: bold;
    color: white;

    text-align: center;
    font-family: "Titillium Web", sans-serif;

    h1 {
      margin: 0;
    }
  }

  .product-layout {
    /* margin-top: 150px; */
    padding: 2rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 1rem;
    justify-items: center;
  }
`

const WalkBehindFloorScrubbers = () => {
  return (
    <>
      <SEO title="Walk Behind Floor Scrubbers" />
      <Layout>
        <WbfsPageStyles>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "30px",
              paddingTop: "60px",
            }}
          ></div>
          <div className="hero-container">
            <img src={HeroImage} alt="" />
          </div>
          <div className="heading">
            <h1>Walk Behind Floor Scrubbers</h1>
            <SeeMoreButton title="See Machines" goTo="#mydiv" />
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "30px",
            }}
          ></div>
          <div className="product-layout" id="mydiv">
            <ProductLayout
              image={MicroMagImage}
              title="MicroMag"
              link="Download MicroMag Brochure"
              content="MicroMag Walk Behind Floor Scrubber Dryer was designed based on our already well known Magnum and MiniMag. Our goal is to have the smallest Walk Behind available without sacrificing on solution tank space or productivity in terms of scrubbing performance."
            />
            <ProductLayout
              image={MiniHDImage}
              title="MicroMini"
              link="Download MicroMini Brochure"
              content="MicroMini Floor Scrubber Dryer is known for its simple design and durable construction, offering unmatched value for the customer. It comes equipped with a Traction drive which includes a powerful all-gear transaxle for climbing ramps and max operator ease or a Pad Assist version."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Micro-HD"
              link="Download Micro-HD Brochure"
              content="Micro-HD Floor Scrubber Dryer is known for its simple design and durable construction, offering unmatched value for the customer. Comes equipped with a Traction drive which includes a powerful all-gear transaxle for climbing ramps and max operator ease or a Pad Assist version."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="Mini-HD Floor Scrubber is known for its simple design and durable construction, offering unmatched value for the customer. The Mini-HD comes equipped with a Traction drive which includes a powerful all-gear transaxle for climbing ramps and max operator ease."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mag-HD"
              link="Download Mag-HD Brochure"
              content="Mag-HD Floor Scrubber Dryer is known for its simple design and durable construction, offering unmatched value for the customer. Comes equipped with a Traction drive which includes a powerful all-gear transaxle for climbing ramps and max operator ease."
            />
            {/* <ProductLayout />
            <ProductLayout />
            <ProductLayout />
            <ProductLayout />
            <ProductLayout /> */}
          </div>
        </WbfsPageStyles>
      </Layout>
    </>
  )
}

export default WalkBehindFloorScrubbers
