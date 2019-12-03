import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>Here is the about page</p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
