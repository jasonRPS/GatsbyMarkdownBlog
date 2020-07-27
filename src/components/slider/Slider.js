import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SlideImage1 from "../../images/Sanitation.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  .slide {
    width: 100%;
    height: 70vh;

    .text-content {
      text-align: center;
      padding: 1rem;
      max-width: 350px;
      position: absolute;
      top: 50px;
      right: 70px;
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const DotsContainer = styled.div`
  position: absolute;
  display: flex;
  width: 350px;
  bottom: 25%;
  left: 50%;
  margin-left: -175px;
  justify-content: space-evenly;

  .dot {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid black;
  }

  .active {
    background-color: red;
  }
`

const Slider = () => {
  const [slides, setSlides] = useState({
    display: "none",
  })
  const [slideIndex, setSlideIndex] = useState(0)
  const [dots, setDots] = useState({
    active: "",
  })

  useEffect(e => {
    let dot = (e.target.className = "dot")
    console.log(dot)
  }, [])

  return (
    <>
      <SlideContainer>
        <div className="slide">
          <img src={SlideImage1} alt="" />
          <div className="text-content">
            <h1>Here is the Title</h1>
            <p>
              Here is where the brief paragraph will live. This paragraph
              explains something about the slide
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={SlideImage2} alt="" />
          <div className="text-content">
            <h1>Here is the Title</h1>
            <p>
              Here is where the brief paragraph will live. This paragraph
              explains something about the slide
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={SlideImage3} alt="" />
          <div className="text-content">
            <h1>Here is the Title</h1>
            <p>
              Here is where the brief paragraph will live. This paragraph
              explains something about the slide
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="slide">
          <img src={SlideImage4} alt="" />
          <div className="text-content">
            <h1>Here is the Title</h1>
            <p>
              Here is where the brief paragraph will live. This paragraph
              explains something about the slide
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </SlideContainer>
      <DotsContainer>
        <div className={`dot ${dots.active}`}></div>
        <div className={`dot ${dots.active}`}></div>
        <div className={`dot ${dots.active}`}></div>
        <div className={`dot ${dots.active}`}></div>
      </DotsContainer>
    </>
  )
}

export default Slider
