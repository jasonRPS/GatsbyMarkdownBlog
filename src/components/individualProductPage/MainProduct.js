import React, { useState } from "react"
import styled from "styled-components"

import CylindricalImage from "./images/green_0004_Hue_Saturation-1.png"
import DiskImage from "./images/green_0002_Hue_Saturation-1-copy-2.png"

const MainProductStyles = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 5rem;
  /* justify-items: center; */
`

const ImageCarousel = styled.div`
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
    }
  }
`

const MainContent = styled.div`
  font-family: "Titillium Web", sans-serif;
  justify-self: center;
  padding: 0 2.5rem;

  h1 {
    @media (max-width: 1300px) {
      margin: 0;
    }
  }

  p {
    @media (max-width: 1300px) {
      width: 400px;
      font-size: 0.9em;
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
    }

    h3 {
      font-size: 1.5em;
    }
  }
`

const MediaTiles = styled.div`
  width: 1230px;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */

  .media-tile {
    width: 300px;
    height: 150px;
    margin: 0.4rem 0.2rem;
    background-color: black;
    color: white;
    text-align: center;
    font-family: "Titillium Web", sans-serif;

    .center {
      padding: 35px 0;
      height: 100%;
    }

    h2 {
      font-size: 2em;
      margin: auto;
    }

    p {
      margin: 0 auto;
      font-size: 1em;
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
      <MediaTiles>
        <div className="media-tile">
          <div className="center">
            <h2>You Be The Judge</h2>
            <p>Walk Behind Scrubbers</p>
          </div>
        </div>
        <div className="media-tile">
          <div className="center">
            <h2>Videos</h2>
            <p>Walk Behind Scrubbers</p>
          </div>
        </div>
        <div className="media-tile">
          <div className="center">
            <h2>Images</h2>
            <p>Walk Behind Scrubbers</p>
          </div>
        </div>
        <div className="media-tile">
          <div className="center">
            <h2>Applications</h2>
            <p>Walk Behind Scrubbers</p>
          </div>
        </div>
      </MediaTiles>
    </>
  )
}

export default MainProduct
