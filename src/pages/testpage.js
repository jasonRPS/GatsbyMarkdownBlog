import React from "react"
import ProductPageTemplate from "../components/individualProductPage/ProductPageTemplate"
import SocialShare from "../components/SocialShare"
import { Button } from "../components/common"
import FeaturedProduct from "../components/individualProductPage/FeaturedProduct"
import Layout from "../components/Layout"

const TestPage = props => {
  return (
    <>
      <Layout>
        <FeaturedProduct />
      </Layout>
    </>
  )
}

export default TestPage
