import React, { useState, useEffect } from "react"
import styled from "styled-components"

//Slide Images
import SlideImage1 from "../../images/Sanitation.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"

const SlideShowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;

  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`
const Slide = styled.div`
  width: 100%;
  height: 75vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-content {
    position: absolute;
    top: 120px;
    color: blue;
    right: 50px;
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
    transition: background-color 0.6s ease;

    &:hover {
      background-color: red;
    }
  }
  .active {
    background-color: red;
  }
`

const Slider = () => {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    let slideIndex = slide
    showSlides()
    function showSlides(n) {
      var i
      var slides = document.getElementsByClassName("mySlides")
      var dots = document.getElementsByClassName("dot")
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
      }
      slideIndex++
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
      }
      slides[slideIndex - 1].style.display = "block"
      dots[slideIndex - 1].className += " active"
      setTimeout(showSlides, 7000) // Change image every 2 seconds
    }
  }, [])

  return (
    <>
      <SlideShowContainer>
        <Slide className="mySlides fade">
          <img src={SlideImage1} alt="" />
          <div className="text-content">Here is Slide 1</div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage2} alt="" />
          <div className="text-content">Here is Slide 2</div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage3} alt="" />
          <div className="text-content">Here is Slide 3</div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage4} alt="" />
          <div className="text-content">Here is Slide 4</div>
        </Slide>
      </SlideShowContainer>
      <DotsContainer>
        <div onClick={() => setSlide(0)} className="dot"></div>
        <div onClick={() => setSlide(1)} className="dot"></div>
        <div onClick={() => setSlide(2)} className="dot"></div>
        <div onClick={() => setSlide(3)} className="dot"></div>
      </DotsContainer>
    </>
  )
}

export default Slider
