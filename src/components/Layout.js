import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
// import "../styles/index.scss"
import layoutStyles from "./layouts.module.scss"
import MainNav from "./navigation/MainNav"
import { LayoutStyles } from "./styles/LayoutStyles"

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
      </Helmet>

      <LayoutStyles>
        <div>
          <MainNav />
          <body style={{ margin: "0", paddingTop: "60px" }}>
            {props.children}
          </body>
        </div>
        <Footer />
      </LayoutStyles>
    </>
  )
}

export default Layout
