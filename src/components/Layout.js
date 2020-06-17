import React from "react"
import Footer from "./Footer"
import Helmet from "react-helmet"
import MainNav from "./navigation/MainNav"
import { LayoutStyles } from "./styles/LayoutStyles"
import Navigation from "./navigation/Navigation"

const Layout = props => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <LayoutStyles>
        <Navigation />
        {props.children}

        <Footer />
      </LayoutStyles>
    </>
  )
}

export default Layout
