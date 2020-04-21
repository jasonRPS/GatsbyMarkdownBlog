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
import Slider from "../components/slider/Slider"
// import Slider from "../components/slider/Slider"

// import React from 'react'

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
]

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <IndexStyles>
          <SEO title="Home" />
          <Head title="Home" />

          {/* <div id="carousel">
            <IndexPhotoCarousel />
          </div> */}
          {/* <ProductSelector /> */}
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
