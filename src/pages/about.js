import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <h1>About</h1>
        <p>Here is the about page</p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
