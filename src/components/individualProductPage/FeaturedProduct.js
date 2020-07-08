import React from "react"
import { StyledFeaturedProducts } from "./FeaturedProduct/FeaturedProductStyles"
import ImageCarousel from "./FeaturedProduct/ImageCarousel"
import FeaturedContent from "./FeaturedProduct/FeaturedContent"

const FeaturedProduct = props => {
  return (
    <StyledFeaturedProducts>
      <ImageCarousel />
      <FeaturedContent />
    </StyledFeaturedProducts>
  )
}

export default FeaturedProduct
