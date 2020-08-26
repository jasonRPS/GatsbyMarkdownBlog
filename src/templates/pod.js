import React, { useState, useEffect } from "react"
import RSSParser from "rss-parser"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"
import styled from "styled-components"

const PodStyles = styled.div`
  main {
    width: 80%;
    margin: auto;
    padding: 5rem 1rem;
  }
`

export const query = graphql`
  query($slug: String!) {
    contentfulTestUrl(slug: { eq: $slug }) {
      title
      feed
      slug
    }
  }
`

const Pod = props => {
  //function to bring in the feed
  const FEED_URL = props.data.contentfulTestUrl.feed
  const [feed, setFeed] = useState({ title: "", items: [] })

  const rssData = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser()

    try {
      const feed = await parser.parseURL(`${CORS_PROXY}${FEED_URL}`)
      setFeed(feed)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    rssData()
  }, [])
  // end feed function
  return (
    <div>
      <Layout>
        <h1>{props.data.contentfulTestUrl.title}</h1>
        {feed.items.slice(0, 5).map((item, i) => (
          <div key={i}>
            <h1>{item.title}</h1>

            <audio controls>
              <source src={item.enclosure.url} />
            </audio>
          </div>
        ))}
      </Layout>
    </div>
  )
}

export default Pod

{
  /* <MiniHdOptions />
      {feed.items.slice(0, 5).map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <audio controls>
            <source src={item.enclosure.url} />
          </audio>
        </div>
      ))} */
}
