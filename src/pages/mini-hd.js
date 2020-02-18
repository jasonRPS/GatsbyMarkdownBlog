import React from "react"
import Layout from "../components/Layout"
import ProductInfo from "../components/ProductInfo"
import styled from "styled-components"

const MiniHDPageStyles = styled.div`
  #product-container {
    width: 90%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
  }
`

const MiniHDPage = () => {
  return (
    <Layout>
      <MiniHDPageStyles>
        <div id="product-container">
          <ProductInfo />
        </div>
      </MiniHDPageStyles>
    </Layout>
  )
}

export default MiniHDPage
