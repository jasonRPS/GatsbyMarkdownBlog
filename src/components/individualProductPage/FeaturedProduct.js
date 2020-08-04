import React, { useState } from "react"
import { StyledFeaturedProducts } from "./FeaturedProduct/FeaturedProductStyles"
import ImageCarousel from "./FeaturedProduct/ImageCarousel"
import FeaturedContent from "./FeaturedProduct/FeaturedContent"
import { Button } from "../common/Button"
import styled from "styled-components"
import DownloadsBar from "../DownloadsBar"
import SocialShare from "../SocialShare"
import HeaderImage from "./images/mini-hd-cylindrical-thumb1.jpg"
import DiskDeck from "./images/disk-deck-first-frame.jpg"
import DiskDeckAnimate from "./images/disk-deck-loop.gif"

const FeaturedProduct = props => {
  const [diskImage, setDiskImage] = useState(DiskDeck)
  const [thumbnail, setThumbnail] = useState({
    thumb1: props.cylindricalThumb1,
    thumb2: props.cylindricalThumb2,
    thumb3: props.cylindricalThumb3,
    thumb4: props.cylindricalThumb4,
    thumb5: props.cylindricalThumb5,
  })

  const [mainImage, setMainImage] = useState({
    main1: props.cylindricalMain1,
    main2: props.cylindricalMain2,
    main3: props.cylindricalMain3,
    main4: props.cylindricalMain4,
    main5: props.cylindricalMain5,
  })

  const [mainImageRender, setMainImageRender] = useState(mainImage.main1)
  const [toggleMedia, setToggleMedia] = useState({
    displayImages: "block",
    displayVideo: "none",
  })

  const [deckColor, setDeckColor] = useState({
    cylindrical: "",
    disk: "grayscale(100%)",
  })

  function handleClick(e) {
    setMainImageRender(e.target.dataset.main)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
  }

  function handleVideoToggle() {
    if (toggleMedia.displayVideo === "none") {
      setToggleMedia({
        displayImages: "none",
        displayVideo: "block",
      })
    }
  }

  function cylindricalSelect() {
    setDiskImage(DiskDeck)
    setDeckColor({
      cylindrical: "",
      disk: "grayscale(100%)",
    })
    setMainImageRender(props.cylindricalMain1)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
    setThumbnail({
      thumb1: props.cylindricalThumb1,
      thumb2: props.cylindricalThumb2,
      thumb3: props.cylindricalThumb3,
      thumb4: props.cylindricalThumb4,
      thumb5: props.cylindricalThumb5,
    })
    setMainImage({
      main1: props.cylindricalMain1,
      main2: props.cylindricalMain2,
      main3: props.cylindricalMain3,
      main4: props.cylindricalMain4,
      main5: props.cylindricalMain5,
    })
  }

  function diskSelect() {
    setDeckColor({
      cylindrical: "grayscale(100%)",
      disk: "",
    })
    setDiskImage(DiskDeckAnimate)
    setMainImageRender(props.diskMain1)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
    setThumbnail({
      thumb1: props.diskThumb1,
      thumb2: props.diskThumb2,
      thumb3: props.diskThumb3,
      thumb4: props.diskThumb4,
      thumb5: props.diskThumb5,
    })
    setMainImage({
      main1: props.diskMain1,
      main2: props.diskMain2,
      main3: props.diskMain3,
      main4: props.diskMain4,
      main5: props.diskMain5,
    })
  }

  const MobileHeader = styled.div`
    max-width: 700px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: none;
    @media (max-width: 1200px) {
      display: flex;
      flex-wrap: wrap;
    }

    h1 {
      margin-right: 20px;

      @media (max-width: 650px) {
        margin-bottom: 0;
      }
    }

    h3 {
      margin: 0 0 20px 0;
    }

    button {
      height: 50px;
      background: #ed2024;
      color: white;
      border: none;
      cursor: pointer;
      @media (max-width: 650px) {
        margin-bottom: 10px;
        width: 90%;
      }
    }

    @media (max-width: 650px) {
      display: block;
    }

    @media (max-width: 400px) {
      display: none;
    }
  `

  const MobileParagraph = styled.p`
    width: 90%;
    margin: 0 auto;
    display: none;
    @media (max-width: 1030px) {
      display: block;
    }
  `

  const MobileDownloads = styled.div`
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  `

  const ShareContainer = styled.div`
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  `

  const StyledMobilImageHeader = styled.div`
    max-width: 700px;
    margin: 0 auto;
    display: none;

    @media (max-width: 400px) {
      display: block;
      max-width: 380px;
      margin: 0 auto;
    }
    .image-header-container {
      display: flex;
      align-items: center;
      justify-content: space-around;

      h1 {
        font-size: 1.5em;
        text-align: center;
      }

      .mobile-image-container {
        width: 70px;
        height: 70px;

        img {
          padding-left: 15px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    button {
      height: 50px;

      background: #ed2024;
      color: white;
      border: none;
      cursor: pointer;
      @media (max-width: 650px) {
        margin-bottom: 10px;
        width: 90%;

        margin-left: 20px;
      }
    }
  `

  return (
    <>
      <MobileHeader>
        <h1>{props.mobileTitle}</h1>
        <a style={{ textDecoration: "none", color: "white" }} href="#demo-form">
          <button>Request a Demo</button>
        </a>
        <h3>{props.specifications}</h3>
      </MobileHeader>
      <StyledMobilImageHeader>
        <div className="image-header-container">
          <div className="mobile-image-container">
            <img src={HeaderImage} alt="" />
          </div>
          <h1>{props.mobileTitle}</h1>
        </div>
        <h3
          style={{ fontSize: "1em", textAlign: "center", margin: "0 0 20px 0" }}
        >
          {props.specifications}
        </h3>
        <a style={{ textDecoration: "none", color: "white" }} href="#demo-form">
          <button>Request a Demo</button>
        </a>
      </StyledMobilImageHeader>
      <MobileDownloads>
        <DownloadsBar
          brochureLink={props.brochureLink}
          techLink={props.techLink}
          partsLink={props.partsLink}
          opLink={props.opLink}
        />
      </MobileDownloads>
      <MobileParagraph>
        {/* Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made */}
        consistent cleaning and being budget conscious our top priorities while
        delivering a durable floor scrubber that will last for years. Maintain
        cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and
        other applications. The scrub brushes are installed and removed without
        tools to allow ease when switching between application’s needs. The
        squeegee blades can be rotated or flipped without tools. Ensure complete
        cleaning in a variety of sized applications with a reliable scrubber.
      </MobileParagraph>
      <StyledFeaturedProducts>
        <ImageCarousel
          cylindricalThumb1={props.cylindricalThumb1}
          cylindricalThumb2={props.cylindricalThumb2}
          cylindricalThumb3={props.cylindricalThumb3}
          cylindricalThumb4={props.cylindricalThumb4}
          cylindricalThumb5={props.cylindricalThumb5}
          cylindricalMain1={props.cylindricalMain1}
          cylindricalMain2={props.cylindricalMain2}
          cylindricalMain3={props.cylindricalMain3}
          cylindricalMain4={props.cylindricalMain4}
          cylindricalMain5={props.cylindricalMain5}
          diskThumb1={props.diskThumb1}
          diskThumb1={props.diskThumb1}
          diskThumb1={props.diskThumb1}
          diskThumb1={props.diskThumb1}
          diskThumb1={props.diskThumb1}
          diskMain1={props.diskMain1}
          diskMain2={props.diskMain2}
          diskMain3={props.diskMain3}
          diskMain4={props.diskMain4}
          diskMain5={props.diskMain5}
          thumbnail={thumbnail}
          mainImage={mainImage}
          mainImageRender={mainImageRender}
          toggleMedia={toggleMedia}
          handleClick={handleClick}
          handleVideoToggle={handleVideoToggle}
          videoSource={props.videoSource}
        />
        <FeaturedContent
          title={props.title}
          textContent={props.textContent}
          deckColor={deckColor}
          diskSelect={diskSelect}
          cylindricalSelect={cylindricalSelect}
          brochureLink={props.brochureLink}
          techLink={props.techLink}
          partsLink={props.partsLink}
          opLink={props.opLink}
          specifications={props.specifications}
          diskImage={diskImage}
        />
      </StyledFeaturedProducts>
      <ShareContainer>
        <SocialShare />
      </ShareContainer>
    </>
  )
}

export default FeaturedProduct
