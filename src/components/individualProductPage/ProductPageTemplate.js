import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import FeaturedProduct from "./FeaturedProduct"

const ProductPageLayout = styled.body`
  max-width: 1400px;
  margin: 0 auto;
`

const ProductPageTemplate = props => {
  return (
    <Layout>
      <ProductPageLayout>
        <FeaturedProduct />
      </ProductPageLayout>
    </Layout>
  )
}

export default ProductPageTemplate
