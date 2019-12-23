import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import { IndexStyles } from "../components/styles/indexStyles"
import CallToActionCard from "../components/CallToActionCard"

// import LatestBlog from "../components/LatestBlogs"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <IndexStyles>
          <Head title="Home" />
          <div id="hero-image">Hero Image and Hero Story</div>
          <div id="call-to-action">
            <CallToActionCard />
            <CallToActionCard />
            <CallToActionCard />
            <CallToActionCard />
          </div>
          <h1>Hello</h1>
          <h2>factory Cat</h2>
          {/* <p>
          Need a developer? <Link to="/contact"> Contact Me</Link>
        </p> */}
          {/* <LatestBlog /> */}
        </IndexStyles>
      </Layout>
    </div>
  )
}

export default IndexPage
