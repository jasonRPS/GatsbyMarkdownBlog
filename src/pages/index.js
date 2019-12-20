import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
// import LatestBlog from "../components/LatestBlogs"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello</h1>
        <h2>I am Jason a full stack developer living in Racine</h2>
        {/* <p>
          Need a developer? <Link to="/contact"> Contact Me</Link>
        </p> */}
        {/* <LatestBlog /> */}
      </Layout>
    </div>
  )
}

export default IndexPage
