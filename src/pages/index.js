import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import { IndexStyles } from "../components/styles/indexStyles"
import CallToActionCard from "../components/CallToActionCard"
import ProductSelector from "../components/productSelector/productSelector"
import IndexPhotoCarousel from "../components/IndexPhotoCarousel"
import CategorySection from "../components/CategorySection"

// import LatestBlog from "../components/LatestBlogs"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <IndexStyles>
          <Head title="Home" />
          <div id="carousel">
            <IndexPhotoCarousel />
          </div>
          <ProductSelector />
          <CategorySection />
          <div id="call-to-action">
            <CallToActionCard
              title="Clean great stuff"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image="https://source.unsplash.com/random/1920x1080"
            />
            <CallToActionCard
              title="Clean great stuff"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image="https://source.unsplash.com/random/1920x1080"
            />
            <CallToActionCard
              title="Clean great stuff"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image="https://source.unsplash.com/random/1920x1080"
            />
            <CallToActionCard
              title="Clean great stuff"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image="https://source.unsplash.com/random/1920x1080"
            />
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
