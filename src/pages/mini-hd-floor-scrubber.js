import React from "react"
import { ProductPageStyles } from "../components/productPage/styles/ProductPageStyle"
import ProductPageLayout from "../components/productPage/ProductPageLayout"

import MainImage from "../images/mini-hd-test2.png"
import ScrubImage from "../images/30-inch-cylindrical-spin.png"
import ScrubImage2 from "../images/260-30-inch-deck.png"

const MiniHDPage = () => {
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
            <li>Features</li>
            <li>Specifications</li>
            <li>Options</li>
            <li>You be the Judge</li>
          </ul>
        </div>
      </ProductPageStyles>
    </ProductPageLayout>
  )
}

export default MiniHDPage
