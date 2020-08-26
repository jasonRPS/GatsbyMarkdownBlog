import React, { useState, useEffect } from "react"
import RSSParser from "rss-parser"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Slider from "../components/slider/Slider"
import Animation from "../images/Comp1.gif"
import AnimationThumb from "../images/small-deck-disk-frame-12.png"
import styled from "styled-components"
import MiniHdOptions from "../components/individualProductPage/MiniHdOptions"

const TestPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTestUrl {
        edges {
          node {
            slug
            feed
            title
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allContentfulTestUrl.edges.map(edge => {
        return <Link to={`/pod/${edge.node.slug}`}>{edge.node.title}</Link>
      })}
    </Layout>
  )
}

export default TestPage

//https://feed.podbean.com/rememberthegame/feed.xml
