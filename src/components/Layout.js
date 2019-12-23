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
      </Helmet>
      <LayoutStyles>
        <div>
          <MainNav />

          {props.children}
        </div>
        <Footer />
      </LayoutStyles>
    </>
  )
}

export default Layout
