import React, { useState, useEffect } from "react"
import styled from "styled-components"

//Slide Images
import SlideImage1 from "../../images/Sanitation.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"

const StyledSlidesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ease-in-out;
    transition-duration: 1s;
  }
`
const DotsContainer = styled.div`
  width: 350px;
  left: 50%;
  margin-left: -175px;
  position: absolute;
  bottom: 20%;
  display: flex;
  justify-content: space-evenly;

  .dot {
    width: 20px;
    height: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: red;
    }
    /* z-index: 2; */
  }

  .active {
    background-color: red;
  }
`

const slides = [SlideImage1, SlideImage2, SlideImage3, SlideImage4]

const Slider = () => {
  const [slide, setSlide] = useState(0)
  const [active, setActive] = useState({
    btn1: "",
    btn2: "",
    btn3: "",
    btn4: "",
  })

  useEffect(() => {
    let dots = document.getElementsByClassName("dot")
    function rotateSlides() {
      for (let i = 0; i < slides.length; i++) {
        setTimeout(() => {
          setSlide(i)
          if (i === 3) {
            setTimeout(rotateSlides, 6000)
          }
        }, i * 6000)
      }
    }
    function rotateDots() {
      for (let i = 0; i < slides.length; i++) {
        setTimeout(() => {
          dots[i].style.cssText = "backgroundColor: red"
          if (i === 3) {
            setTimeout(rotateDots, 6000)
          }
        }, i * 6000)
      }
    }

    rotateDots()
    rotateSlides()
  }, [])

  return (
    <>
      <StyledSlidesContainer>
        <img src={slides[slide]} />
      </StyledSlidesContainer>
      <DotsContainer>
        <div onClick={() => setSlide(0)} className={`dot ${active.btn1}`}></div>
        <div onClick={() => setSlide(1)} className={`dot ${active.btn2}`}></div>
        <div onClick={() => setSlide(2)} className={`dot ${active.btn3}`}></div>
        <div onClick={() => setSlide(3)} className={`dot ${active.btn4}`}></div>
      </DotsContainer>
    </>
  )
}

export default Slider
