import React, { useState } from "react"
import { ProductPageStyles } from "../components/productPage/styles/ProductPageStyle"
import ProductPageLayout from "../components/productPage/ProductPageLayout"

import MainImage from "../images/mini-hd-test2.png"
import ScrubImage from "../images/30-inch-cylindrical-spin.png"
import ScrubImage2 from "../images/260-30-inch-deck.png"
import OptionImage1 from "../images/suds.png"
import OptionImage2 from "../images/zero.jpg"
import OptionImage3 from "../images/vac.jpg"
import OptionImage4 from "../images/sprayJet.jpg"
import OptionImage5 from "../images/charger.jpg"
import OptionImage6 from "../images/fc-image2.jpg"

import FeaturesSection from "../components/productPage/FeaturesSection"
import SpecsSection from "../components/productPage/SpecsSection"
import OptionsSection from "../components/productPage/OptionsSection"

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
        {/* <div id="scroll-description"></div> */}
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
        <div className="product-sections" id="option-section">
          <OptionsSection
            optionImage1={OptionImage1}
            optionsTitle1="suds"
            optionsDescription1="Universal soap proportioning system with two dilution levels"
            optionImage2={OptionImage2}
            optionsTitle2="ZerO3"
            optionsDescription2="Chemical free solution created on-site and on-demand"
            optionImage3={OptionImage3}
            optionsTitle3="Vacuum Hose"
            optionsDescription3="Universal soap proportioning system with two dilution levels"
            optionImage4={OptionImage4}
            optionsTitle4="Spray Jet"
            optionsDescription4="allows operators to spray down hard to reach areas"
            optionImage5={OptionImage5}
            optionsTitle5="suds"
            optionsDescription5="Universal soap proportioning system with two dilution levels"
            optionImage5={OptionImage5}
            optionsTitle5="Onboard Charger"
            optionsDescription5="Universal soap proportioning system with two dilution levels"
            optionImage6={OptionImage6}
            optionsTitle6="HD Side Doors"
            optionsDescription6="Universal soap proportioning system with two dilution levels"
          />
        </div>
        <div className="product-sections" id="judge-section"></div>
      </ProductPageStyles>
    </ProductPageLayout>
  )
}

export default MiniHDPage
