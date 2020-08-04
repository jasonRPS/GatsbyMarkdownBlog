import React, { useState } from "react"
import { StyledFeatureContent } from "./FeaturedProductStyles/StyledFeatureContent"
import { Button } from "../../common"
import DownloadsBar from "../../DownloadsBar"
import SocialShare from "../../SocialShare"
import CylindricalDeck from "../images/cylindrical-deck.png"

const FeaturedContent = props => {
  // const [diskImage, setDiskImage] = useState(DiskDeck)
  return (
    <StyledFeatureContent>
      <div className="title-container">
        <h1>{props.title}</h1>
        <a href="#demo-form">
          <Button>Request a Demo</Button>
        </a>
      </div>
      <h3>{props.specifications}</h3>
      <p>{props.textContent}</p>
      <div className="download-share">
        <DownloadsBar
          brochureLink={props.brochureLink}
          techLink={props.techLink}
          partsLink={props.partsLink}
          opLink={props.opLink}
        />
        <SocialShare />
      </div>
      <h2>Choose from two scrub systems</h2>
      <div className="deck-container">
        <div className="deck-image-container">
          <img
            style={{ filter: props.deckColor.cylindrical }}
            onClick={props.cylindricalSelect}
            src={CylindricalDeck}
            alt=""
          />
          <h3 style={{ textAlign: "center", margin: "0" }}>Cylindrical</h3>
        </div>
        <div className="deck-image-container">
          <img
            style={{ filter: props.deckColor.disk }}
            onClick={props.diskSelect}
            src={props.diskImage}
            alt=""
          />
          <h3 style={{ textAlign: "center", margin: "0" }}>Disk</h3>
        </div>
      </div>
    </StyledFeatureContent>
  )
}

export default FeaturedContent
