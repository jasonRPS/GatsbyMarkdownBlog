import React from "react"
import styled from "styled-components"

const MobileNavStyles = styled.div`
  width: 350px;
  background-color: rgba(0, 0, 0, 0.8);
  /* border: 10px double #ed2024; */
  height: 500px;
  border-right-style: double;
  border-bottom-style: double;
  border-color: #ed2024;
  border-width: 10px;
`

const MobileNavigation = () => {
  return (
    <MobileNavStyles>
      Here is my mobile navigation. it is awesome
    </MobileNavStyles>
  )
}

export default MobileNavigation
