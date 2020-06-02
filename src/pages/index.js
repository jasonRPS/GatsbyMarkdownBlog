import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { IndexStyles } from "../components/styles/indexStyles"
import CallToActionCard from "../components/CallToActionCard"
import CategorySection from "../components/CategorySection"
import Slider from "../components/slider/Slider"

import Image1 from "../images/fc-image.jpg"
import Image2 from "../images/fc-image1.jpg"
import Image3 from "../images/fc-image2.jpg"
import Image4 from "../images/fc-image3.jpg"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <IndexStyles>
          <SEO title="Home" />
          <Head title="Home" />
          <CategorySection />
          <div id="call-to-action-section">
            <CallToActionCard
              title="Clean great stuff"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image={Image2}
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
        </IndexStyles>
      </Layout>
    </div>
  )
}

export default IndexPage
