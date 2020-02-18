import React from "react"
import Layout from "../components/Layout"
import ProductInfo from "../components/ProductInfo"
import styled from "styled-components"
import SeeMoreButton from "../components/controls/SeeMoreButton"

const MiniHDPageStyles = styled.div`
  #product-container {
    width: 90%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  #spec-nav {
    width: 100%;
    height: 50px;
    background-color: #2d2d2d;
  }
`

const MiniHDPage = () => {
  return (
    <Layout>
      <MiniHDPageStyles>
        <div id="product-container">
          <ProductInfo />
        </div>
        <div id="spec-nav">
          <ul>
            <li>Options</li>
            <li>Specs</li>
          </ul>
        </div>
      </MiniHDPageStyles>
    </Layout>
  )
}

export default MiniHDPage
