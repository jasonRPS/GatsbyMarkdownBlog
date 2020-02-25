import React, { useState } from "react"
import { ProductPageStyles } from "../components/productPage/styles/ProductPageStyle"
import ProductPageLayout from "../components/productPage/ProductPageLayout"

import MainImage from "../images/mini-hd-test2.png"
import ScrubImage from "../images/30-inch-cylindrical-spin.png"
import ScrubImage2 from "../images/260-30-inch-deck.png"
import FeaturesSection from "../components/productPage/FeaturesSection"
import SpecsSection from "../components/productPage/SpecsSection"

const MiniHDPage = () => {
  const [featuresSelected, setFeaturesSelected] = useState("unselected-link")
  const [specsSelected, setSpecsSelected] = useState("unselected-link")
  const [optionsSelected, setOptionsSelected] = useState("unselected-link")
  const [judgeSelected, setJudgeSelected] = useState("unselected-link")

  function selectLink() {}

  return (
    <ProductPageLayout
      mainImage={MainImage}
      title="Mini-HD Walk Behind Floor Scrubber"
      details="Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made consistent cleaning and being budget conscious our top priorities while delivering a durable floor scrubber that will last for years. Maintain cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and other applications. The scrub brushes are installed and removed without tools to allow ease when switching between application’s needs. The squeegee blades can be rotated or flipped without tools. Ensure complete cleaning in a variety of sized applications with a reliable scrubber."
      scrubImage={ScrubImage}
      scrubImage2={ScrubImage2}
    >
      <ProductPageStyles>
        <div id="product-details-nav">
          <ul>
            <li className={featuresSelected}>Features</li>
            <li className={specsSelected}>Specifications</li>
            <li className={optionsSelected}>Options</li>
            <li className={judgeSelected}>You be the Judge</li>
          </ul>
        </div>
        <div className="product-sections" id="features-section">
          <FeaturesSection />
        </div>
        <div className="product-sections" id="spec-section">
          <SpecsSection />
        </div>
        <div className="product-sections" id="option-section"></div>
        <div className="product-sections" id="judge-section"></div>
      </ProductPageStyles>
    </ProductPageLayout>
  )
}

export default MiniHDPage
