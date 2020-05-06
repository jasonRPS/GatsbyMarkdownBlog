import React from "react"

import styled from "styled-components"

const FooterCSS = styled.footer`
  position: absolute;
  bottom: 0;
`

const Footer = () => {
  return (
    <FooterCSS>
      <p>Here is the footer</p>
    </FooterCSS>
  )
}

export default Footer
