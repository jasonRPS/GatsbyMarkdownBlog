import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <h1>Contact Page</h1>
        <p>
          Best way to reach me is via
          <a href="https://twitter.com/GeekLifeDev" target="_blank">
            @geeklifedev
          </a>
          on Twitter!
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
