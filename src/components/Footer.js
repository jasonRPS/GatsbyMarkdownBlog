import React from "react"

import styled from "styled-components"

const FooterCSS = styled.footer`
  /* position: absolute; */
  width: 100%;
  min-height: 60px;
  color: whitesmoke;
  background-color: #333;
  margin: 0;

  p {
    margin: 0;
  }
`

const Footer = () => {
  return (
    <FooterCSS>
      <p>Here is the footer</p>
    </FooterCSS>
  )
}

export default Footer
