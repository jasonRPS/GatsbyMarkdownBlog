import React, { useState } from "react"
import { MainProductSectionStyles } from "./styles/MainProductSectionStyles"
import ApplicationGalleryModal from "./ApplicationGalleryModal"
import YuoBeJudgeModal from "./YouBeJudgeModal"

import MadeInUSAImage from "../../images/hand-made.jpg"
import GalleryImage from "../../images/fc-image3.jpg"
import UnderHoodImage from "../../images/under-the-hood.jpg"
import CompareImage from "../../images/judge.jpg"
import MainMachineImage from "../../images/mini-hd-test-usa.jpg"
import MachineImage from "../../images/mini-hd-test.png"
import VideoModal from "./VideoModal"
import MachineModal from "./MachineModal"
import DiskModal from "./DiskModal"
import CylModal from "./CylModal"

const MainProductSection = props => {
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
      <YuoBeJudgeModal
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
      />

      <DiskModal modalDiskDisplay={modalDiskDisplay} closeModal={closeModal} />
      <CylModal modalCylDisplay={modalCylDisplay} closeModal={closeModal} />

      <div id="container">
        <div id="thumbnail-image-container">
          <div id="thumbnails">
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
          </div>
          <div className="main-image">
            <img src={MainMachineImage} alt={props.alt} />
          </div>
        </div>
        <div id="product-details">
          <h1>{props.title}</h1>
          <p>{props.details}</p>
          <h2>Two Scrub Systems to Choose From</h2>
          <div className="scrubber-thumbnails">
            <div onClick={openDiskModal} className="deck-link-container">
              <img src={props.scrubImage} alt={props.alt} />
              <p>Cylindrical Benefits</p>
            </div>
            <div onClick={openCylModal} className="deck-link-container">
              <img src={props.scrubImage2} alt={props.alt} />
              <p>Disk Benefits</p>
            </div>
          </div>
        </div>
      </div>
    </MainProductSectionStyles>
  )
}

export default MainProductSection
