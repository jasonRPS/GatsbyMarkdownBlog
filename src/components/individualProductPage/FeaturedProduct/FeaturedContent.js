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
        <h1>Mini-HD Walk Behind Floor Scrubber</h1>
        <Button>Request a Demo</Button>
      </div>
      <p>
        Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made
        consistent cleaning and being budget conscious our top priorities while
        delivering a durable floor scrubber that will last for years. Maintain
        cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and
        other applications. The scrub brushes are installed and removed without
        tools to allow ease when switching between application’s needs. The
        squeegee blades can be rotated or flipped without tools. Ensure complete
        cleaning in a variety of sized applications with a reliable scrubber.
      </p>
      <DownloadsBar />
      <SocialShare />
      <h2>Choose from two scrub systems</h2>
      <div className="deck-container">
        <div className="deck-image-container">
          <img onClick={props.cylindricalSelect} src={CylindricalDeck} alt="" />
        </div>
        <div className="deck-image-container">
          <img onClick={props.diskSelect} src={DiskDeck} alt="" />
        </div>
      </div>
    </StyledFeatureContent>
  )
}

export default FeaturedContent
