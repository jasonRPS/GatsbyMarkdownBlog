import React from "react"
import Layout from "../../components/Layout"
import MainProductSection from "./MainProductSection"

const ProductPageLayout = props => {
  return (
    <Layout>
      <MainProductSection
        alt={props.alt}
        mainImage={props.mainImage}
        details={props.details}
        title={props.title}
        scrubImage={props.scrubImage}
        scrubImage2={props.scrubImage2}
      />
      <body style={{ margin: "0" }}>{props.children}</body>
    </Layout>
  )
}

export default ProductPageLayout
