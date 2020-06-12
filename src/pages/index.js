import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { IndexStyles } from "../components/styles/IndexStyles"
import CallToActionCard from "../components/CallToActionCard"
import CategorySection from "../components/CategorySection"
import Slider from "../components/slider/Slider"

import Image1 from "../images/judge.jpg"
import Image2 from "../images/charger.jpg"
import Image3 from "../images/fc-image8.jpg"
import Image4 from "../images/fc-image7.jpg"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Head title="Home" />
      <Layout>
        <Slider />
        <IndexStyles>
          <CategorySection />

          <div id="call-to-action-section">
            <CallToActionCard
              title="You Be the Judge"
              buttonText="Learn More"
              image={Image1}
              link="/you-be-the-judge"
            />
            <CallToActionCard
              title="Contact"
              buttonText="Contact Us"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image={Image2}
              link="/contact"
            />
            <CallToActionCard
              title="Applications"
              buttonText="View Applications"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image={Image3}
              link="/applications"
            />
            <CallToActionCard
              title="Green Clean"
              buttonText="Learn More"
              callToAction="Integrate your tools and teams for deeper insights and faster threat response"
              image={Image4}
              link="/green-clean"
            />
          </div>
        </IndexStyles>
      </Layout>
    </>
  )
}

export default IndexPage
