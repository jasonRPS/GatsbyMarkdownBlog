import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import styled from "styled-components"
import SeeMoreButton from "../components/controls/SeeMoreButton"
import ProductLayout from "../components/ProductLayout"
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
    width: 100%;
    /* background: rgba(0, 0, 0, 0.7); */
    padding: 3rem 0;
    font-size: 2em;
    font-weight: bold;
    color: white;
    position: absolute;
    bottom: 45%;
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
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1rem;
    /* justify-content: space-around; */
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
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="The K10 Standard small walk behind floor scrubber is available with disk and orbital scrub deck options. Its maneuverable design provides versatility on a durable platform."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="The K10 Standard small walk behind floor scrubber is available with disk and orbital scrub deck options. Its maneuverable design provides versatility on a durable platform."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="The K10 Standard small walk behind floor scrubber is available with disk and orbital scrub deck options. Its maneuverable design provides versatility on a durable platform."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="The K10 Standard small walk behind floor scrubber is available with disk and orbital scrub deck options. Its maneuverable design provides versatility on a durable platform."
            />
            <ProductLayout
              image={MiniHDImage}
              title="Mini-HD"
              link="Download Mini-HD Brochure"
              content="The K10 Standard small walk behind floor scrubber is available with disk and orbital scrub deck options. Its maneuverable design provides versatility on a durable platform."
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
