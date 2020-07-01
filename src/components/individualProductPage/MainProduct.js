import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import CylindricalImage from "./images/green_0004_Hue_Saturation-1.png"
import DiskImage from "./images/green_0002_Hue_Saturation-1-copy-2.png"

const MainProductStyles = styled.div`
  display: flex;
  padding-top: 5rem;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`

const ImageCarousel = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }

  .thumbnail-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 1300px) {
      flex-direction: row;
    }

    @media (max-width: 900px) {
      display: none;
    }

    img {
      width: 100px;
      @media (max-width: 1300px) {
        width: 80px;
        height: 85px;
      }
    }
  }

  .main-image {
    img {
      width: 500px;
      @media (max-width: 1300px) {
        width: 400px;
        margin-left: 50px;
      }
      @media (max-width: 900px) {
        width: 300px;
        margin-left: 30px;
      }
    }
  }
`

const MainContent = styled.div`
  width: 50%;
  font-family: "Titillium Web", sans-serif;
  justify-self: center;
  padding: 0 2.5rem;

  @media (max-width: 720px) {
    width: 100%;
    padding: 0;
  }

  h1 {
    @media (max-width: 1300px) {
      margin: 0;
    }
    @media (max-width: 1300px) {
      font-size: 1.8rem;
    }

    @media (max-width: 720px) {
      font-size: 1.8rem;
      padding: 0 1rem;
    }
  }

  p {
    @media (max-width: 1300px) {
      width: 400px;
      font-size: 1em;
    }
    @media (max-width: 900px) {
      width: 350px;
    }

    @media (max-width: 720px) {
      width: 90%;
      padding-left: 1rem;
      font-size: 0.9em;
    }
  }

  h2 {
    @media (max-width: 720px) {
      padding: 0 0.5rem;
    }
  }

  .deck-image-container {
    display: flex;
    justify-content: space-around;
    text-align: center;

    img {
      width: 250px;
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 1300px) {
        width: 150px;
      }

      @media (max-width: 900px) {
        width: 100px;
      }
    }
    h3 {
      font-size: 1.5em;
      @media (max-width: 720px) {
        font-size: 1em;
      }
    }
  }
`

const MediaTiles = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .media-tile {
    width: 300px;
    height: 150px;
    margin: 0.4rem 0.2rem;
    background-color: black;
    color: white;
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    @media (max-width: 1220px) {
      width: 230px;
      height: 130px;
      padding: 0.5rem;
    }

    @media (max-width: 1020px) {
      width: 300px;
      height: 150px;
      padding: 0;
    }

    .center {
      padding: 35px 0;
      height: 100%;
    }

    h2 {
      font-size: 2em;
      margin: auto;

      @media (max-width: 1220px) {
        font-size: 1.5em;
      }

      @media (max-width: 1020px) {
        font-size: 2em;
      }
    }

    p {
      margin: 0 auto;
      font-size: 1em;
    }
  }
`

const MobileThumbNails = styled.div`
  justify-content: space-around;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }

  img {
    width: 80px;
    height: 85px;

    @media (max-width: 720px) {
      width: 70px;
      height: 75px;
    }
  }
`

const MainProduct = props => {
  return (
    <>
      <MainProductStyles>
        <ImageCarousel>
          <div className="thumbnail-container">
            <img
              onClick={props.setMainImage}
              src={props.thumb1}
              atl={props.alt}
            />
            <img
              onClick={props.setMainImage}
              src={props.thumb2}
              atl={props.alt}
            />
            <img
              onClick={props.setMainImage}
              src={props.thumb3}
              atl={props.alt}
            />
            <img
              onClick={props.setMainImage}
              src={props.thumb4}
              atl={props.alt}
            />
            <img
              onClick={props.setMainImage}
              src={props.thumb5}
              atl={props.alt}
            />
          </div>
          <div className="main-image">
            <img src={props.mainImage} alt={props.alt} />
          </div>
        </ImageCarousel>
        <MainContent>
          <h1>{props.title}</h1>
          <p style={{ fontWeight: "normal" }}>{props.textContent}</p>
          <h2>Choose from two scrub systems</h2>
          <div className="deck-image-container">
            <div>
              <img
                onClick={props.setCylImages}
                src={CylindricalImage}
                alt="cylindrical deck"
              />
              <h3>Cylindrical</h3>
            </div>
            <div>
              <img
                onClick={props.setDiskImages}
                src={DiskImage}
                alt="Disk deck"
              />
              <h3>Disk</h3>
            </div>
          </div>
        </MainContent>
      </MainProductStyles>
      <MobileThumbNails>
        <img onClick={props.setMainImage} src={props.thumb1} atl={props.alt} />
        <img onClick={props.setMainImage} src={props.thumb2} atl={props.alt} />
        <img onClick={props.setMainImage} src={props.thumb3} atl={props.alt} />
        <img onClick={props.setMainImage} src={props.thumb4} atl={props.alt} />
        <img onClick={props.setMainImage} src={props.thumb5} atl={props.alt} />
      </MobileThumbNails>
      <MediaTiles>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/you-be-the-judge"
        >
          <div className="media-tile">
            <div className="center">
              <h2>You Be The Judge</h2>
              <p>Walk Behind Scrubbers</p>
            </div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="videos">
          <div className="media-tile">
            <div className="center">
              <h2>Videos</h2>
              <p>Walk Behind Scrubbers</p>
            </div>
          </div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/images">
          <div className="media-tile">
            <div className="center">
              <h2>Images</h2>
              <p>Walk Behind Scrubbers</p>
            </div>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/applications"
        >
          <div className="media-tile">
            <div className="center">
              <h2>Applications</h2>
              <p>Walk Behind Scrubbers</p>
            </div>
          </div>
        </Link>
      </MediaTiles>
    </>
  )
}

export default MainProduct
