import React from "react"
import { StyledFeatureContent } from "./FeaturedProductStyles/StyledFeatureContent"
import { Button } from "../../common"
import DownloadsBar from "../../DownloadsBar"
import SocialShare from "../../SocialShare"
import CylindricalDeck from "../images/cylindrical-deck.png"
import DiskDeck from "../images/disk-deck.png"

const FeaturedContent = props => {
  return (
    <StyledFeatureContent>
      <div className="title-container">
        <h1>{props.title}</h1>
        <a href="#demo-form">
          <Button>Request a Demo</Button>
        </a>
      </div>
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
            src={DiskDeck}
            alt=""
          />
          <h3 style={{ textAlign: "center", margin: "0" }}>Disk</h3>
        </div>
      </div>
    </StyledFeatureContent>
  )
}

export default FeaturedContent
