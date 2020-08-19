import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Slider from "../components/slider/Slider"
import Animation from "../images/Comp1.gif"
import AnimationThumb from "../images/small-deck-disk-frame-12.png"
import styled from "styled-components"
import MiniHdOptions from "../components/individualProductPage/MiniHdOptions"

const TestPage = () => {
  const FEED_URL = "https://feed.podbean.com/rememberthegame/feed.xml"

  useEffect(() => {
    fetch(FEED_URL)
      .then(res => {
        res.text().then(htmlTxt => {
          var domParser = new DOMParser()
          let doc = domParser.parseFromString(htmlTxt, "text/html")
          var feedUrl = doc.querySelector('link[type="application/rss+xml"]')
            .href
        })
      })
      .catch(() => console.error("Error in fetching the website"))
  })

  return (
    <Layout>
      <MiniHdOptions />
    </Layout>
  )
}

export default TestPage
