import React from "react"
import { StyledFeaturedProducts } from "./FeaturedProduct/FeaturedProductStyles"
import ImageCarousel from "./FeaturedProduct/ImageCarousel"
import FeaturedContent from "./FeaturedProduct/FeaturedContent"

const FeaturedProduct = props => {
  return (
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
      />
      <FeaturedContent />
    </StyledFeaturedProducts>
  )
}

export default FeaturedProduct
