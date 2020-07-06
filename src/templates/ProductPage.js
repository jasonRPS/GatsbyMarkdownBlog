import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import MainProduct from "../components/individualProductPage/MainProduct"
import Options from "../components/individualProductPage/Options"

const ProductPage = () => {
  return (
    <Layout>
      <MainProduct />
      <Options />
    </Layout>
  )
}

export default ProductPage
