import React, { useState } from "react"
import { MainProductSectionStyles } from "./styles/MainProductSectionStyles"
import ApplicationGalleryModal from "./ApplicationGalleryModal"
import YuoBeJudgeModal from "./YouBeJudgeModal"

import MadeInUSAImage from "../../images/hand-made.jpg"
import GalleryImage from "../../images/fc-image3.jpg"
import UnderHoodImage from "../../images/under-the-hood.jpg"
import CompareImage from "../../images/judge.jpg"
import MainMachineImage from "../../images/mini-hd-26D-1.jpg"
import MachineImage from "../../images/mini-hd-test.png"
import VideoModal from "./VideoModal"
import MachineModal from "./MachineModal"
import DiskModal from "./DiskModal"
import CylModal from "./CylModal"
import ProductImageGallery from "./productImageGallery"

import MiniCHDImage1 from "../../images/mini-hd-25c_0000_mini-hd-25c-1.5.png"
import MiniCHDImage2 from "../../images/mini-hd-25c_0001_mini-hd-25c-1.6.png"
import MiniCHDImage3 from "../../images/mini-hd-25c_0002_mini-hd-25c-1.7.png"
import MiniCHDImage4 from "../../images/mini-hd-25c_0003_mini-hd-25c-1.8.png"
import MiniCHDImage5 from "../../images/mini-hd-25c_0004_mini-hd-25c-1.9.png"

import MiniHDDImage1 from "../../images/mini-hd-26d-1.png"
import MiniHDDImage2 from "../../images/mini-hd-26d-2.png"
import MiniHDDImage3 from "../../images/mini-hd-26d-3.png"
import MiniHDDImage4 from "../../images/mini-hd-26d-4.png"
import MiniHDDImage5 from "../../images/mini-hd-26d-5.png"

const MainProductSection = props => {
  const [galleryImages, setGalleryImages] = useState({
    mainImage: MiniCHDImage2,
    thumb1: MiniCHDImage2,
    thumb2: MiniCHDImage3,
    thumb3: MiniCHDImage4,
    thumb4: MiniCHDImage5,
    thumb5: MiniCHDImage1,
  })

  function setDiskGallery() {
    setGalleryImages({
      mainImage: MiniHDDImage1,
      thumb1: MiniHDDImage1,
      thumb2: MiniHDDImage4,
      thumb3: MiniHDDImage3,
      thumb4: MiniHDDImage2,
      thumb5: MiniHDDImage5,
    })
  }

  function setCylindricalGallery() {
    setGalleryImages({
      mainImage: MiniCHDImage2,
      thumb1: MiniCHDImage2,
      thumb2: MiniCHDImage3,
      thumb3: MiniCHDImage4,
      thumb4: MiniCHDImage5,
      thumb5: MiniCHDImage1,
    })
  }

  function setMainImage(e) {
    setGalleryImages({
      mainImage: e.target.src,
      thumb1: galleryImages.thumb1,
      thumb2: galleryImages.thumb2,
      thumb3: galleryImages.thumb3,
      thumb4: galleryImages.thumb4,
      thumb5: galleryImages.thumb5,
    })
  }

  const [modalJudgeDisplay, setJudgeModal] = useState("none")
  const [modalVideoDisplay, setVideoModal] = useState("none")
  const [modalMachineDisplay, setMachineModal] = useState("none")
  const [modalApplicationDisplay, setApplicationModal] = useState("none")
  const [modalDiskDisplay, setModalDiskDisplay] = useState("none")
  const [modalCylDisplay, setModalCylDisplay] = useState("none")

  function openJudgeModal() {
    setJudgeModal("block")
  }
  function openVideoModal() {
    setVideoModal("block")
  }
  function openMachineModal() {
    setMachineModal("block")
  }
  function openApplicationModal() {
    setApplicationModal("block")
  }
  function openDiskModal() {
    setModalDiskDisplay("block")
  }
  function openCylModal() {
    setModalCylDisplay("block")
  }

  function closeModal() {
    setJudgeModal("none")
    setVideoModal("none")
    setMachineModal("none")
    setApplicationModal("none")
    setModalDiskDisplay("none")
    setModalCylDisplay("none")
  }

  return (
    <MainProductSectionStyles>
      {/* <YuoBeJudgeModal
        modalJudgeDisplay={modalJudgeDisplay}
        closeModal={closeModal}
      />
      <VideoModal
        modalVideoDisplay={modalVideoDisplay}
        closeModal={closeModal}
      />
      <MachineModal
        modalMachineDisplay={modalMachineDisplay}
        closeModal={closeModal}
      />
      <ApplicationGalleryModal
        modalApplicationDisplay={modalApplicationDisplay}
        closeModal={closeModal}
      /> */}

      {/* <DiskModal modalDiskDisplay={modalDiskDisplay} closeModal={closeModal} />
      <CylModal modalCylDisplay={modalCylDisplay} closeModal={closeModal} /> */}

      <div id="container">
        <div id="thumbnail-image-container">
          {/* <div id="thumbnails">
            <div onClick={openJudgeModal} className="thumbnail-link">
              <img src={CompareImage} />
              <p>You be the judge</p>
            </div>
            <div onClick={openVideoModal} className="thumbnail-link">
              <img src={UnderHoodImage} />
              <p>Videos</p>
            </div>
            <div onClick={openMachineModal} className="thumbnail-link">
              <img src={MachineImage} />
              <p>Machine images</p>
            </div>
            <div onClick={openApplicationModal} className="thumbnail-link">
              <img src={GalleryImage} />
              <p>Application</p>
            </div>
          </div> */}
          <div className="main-image">
            <ProductImageGallery
              setMainImage={setMainImage}
              // mainImage={galleryImages.mainImage}
              mainImage={galleryImages.mainImage}
              thumb1={galleryImages.thumb1}
              thumb2={galleryImages.thumb4}
              thumb3={galleryImages.thumb3}
              thumb4={galleryImages.thumb2}
              thumb5={galleryImages.thumb5}
            />
          </div>
        </div>
        <div id="product-details">
          <h1 style={{ fontFamily: '"Titillium Web", sans-serif' }}>
            {props.title}
          </h1>
          <p>{props.details}</p>
          <h2>Two Scrub Systems to Choose From</h2>
          <div className="scrubber-thumbnails">
            <div
              onClick={setCylindricalGallery}
              className="deck-link-container"
            >
              <img src={props.scrubImage} alt={props.alt} />
              <p>Cylindrical</p>
            </div>
            <div onClick={setDiskGallery} className="deck-link-container">
              <img src={props.scrubImage2} alt={props.alt} />
              <p>Disk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="media-container">
        <div className="media-card you-b-the-judge"></div>
        <div className="media-card videos"></div>
        <div className="media-card images"></div>
        <div className="media-card application"></div>
      </div>
    </MainProductSectionStyles>
  )
}

export default MainProductSection
