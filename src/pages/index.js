import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Head from "../components/Head"
// import { IndexStyles } from "../components/styles/indexStyles"
import CallToActionCard from "../components/CallToActionCard"
import ProductSelector from "../components/productSelector/ProductSelector"
import IndexPhotoCarousel from "../components/IndexPhotoCarousel"
import CategorySection from "../components/CategorySection"
import { IndexStyles } from "../components/styles/IndexStyles"

// import LatestBlog from "../components/LatestBlogs"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        {/* <IndexStyles> */}
        <IndexStyles>
          <SEO title="Home" />
          {/* <Head title="Home" /> */}
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
          {/* </IndexStyles> */}
        </IndexStyles>
      </Layout>
    </div>
  )
}

export default IndexPage
