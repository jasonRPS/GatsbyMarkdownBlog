import React, { useState } from "react"
import Layout from "../components/Layout"
import Slider from "../components/slider/Slider"
import Animation from "../images/Comp1.gif"
import AnimationThumb from "../images/small-deck-disk-frame-12.png"
import styled from "styled-components"

const StyledAnimation = styled.div`
  .animated {
  }

  .still {
    filter: grayscale(100%);
  }

  img {
    cursor: pointer;
    &:hover {
      filter: grayscale(0%);
      transition: 0.5s;
    }
  }
`

const TestPage = () => {
  const [deckImage, setDeckImage] = useState(AnimationThumb)
  const [color, setColor] = useState("still")

  function handleClick() {
    setDeckImage(Animation)
    setColor()
  }

  return (
    <Layout>
      <StyledAnimation>
        <img onClick={handleClick} src={deckImage} className={color} />
      </StyledAnimation>
    </Layout>
  )
}

export default TestPage
