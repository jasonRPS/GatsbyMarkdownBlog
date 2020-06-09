import React, { useState, useEffect } from "react"
import { SliderCss } from "./styles/SliderCss"
import { Link } from "gatsby"
import SlideImage1 from "../../images/Sanitation.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"
import SanitationLogo from "../../images/sanitation-logo.jpg"

const Slider = () => {
  let slideIndex = 0

  function handleSlide1Click() {
    document.getElementById("slide1").style.opacity = "1"
    document.getElementById("slide2").style.opacity = "0"
    document.getElementById("slide3").style.opacity = "0"
    document.getElementById("slide4").style.opacity = "0"

    document.getElementById("slide-nav-1").style.backgroundColor =
      "rgba(237, 32, 36, 0.7)"
    document.getElementById("slide-nav-2").style.backgroundColor = ""
    document.getElementById("slide-nav-3").style.backgroundColor = ""
    document.getElementById("slide-nav-4").style.backgroundColor = ""
    slideIndex = 0
  }

  function handleSlide2Click() {
    document.getElementById("slide1").style.opacity = "0"
    document.getElementById("slide2").style.opacity = "1"
    document.getElementById("slide3").style.opacity = "0"
    document.getElementById("slide4").style.opacity = "0"

    document.getElementById("slide-nav-1").style.backgroundColor = ""
    document.getElementById("slide-nav-2").style.backgroundColor =
      "rgba(237, 32, 36, 0.7)"
    document.getElementById("slide-nav-3").style.backgroundColor = ""
    document.getElementById("slide-nav-4").style.backgroundColor = ""
    slideIndex = 1
  }

  function handleSlide3Click() {
    document.getElementById("slide1").style.opacity = "0"
    document.getElementById("slide2").style.opacity = "0"
    document.getElementById("slide3").style.opacity = "1"
    document.getElementById("slide4").style.opacity = "0"

    document.getElementById("slide-nav-1").style.backgroundColor = ""
    document.getElementById("slide-nav-2").style.backgroundColor = ""
    document.getElementById("slide-nav-3").style.backgroundColor =
      "rgba(237, 32, 36, 0.7)"
    document.getElementById("slide-nav-4").style.backgroundColor = ""
    slideIndex = 2
  }

  function handleSlide4Click() {
    document.getElementById("slide1").style.opacity = "0"
    document.getElementById("slide2").style.opacity = "0"
    document.getElementById("slide3").style.opacity = "0"
    document.getElementById("slide4").style.opacity = "1"

    document.getElementById("slide-nav-1").style.backgroundColor = ""
    document.getElementById("slide-nav-2").style.backgroundColor = ""
    document.getElementById("slide-nav-3").style.backgroundColor = ""
    document.getElementById("slide-nav-4").style.backgroundColor =
      "rgba(237, 32, 36, 0.7)"
    slideIndex = 3
  }

  useEffect(() => {
    showSlides()

    function showSlides() {
      let i
      let slides = document.getElementsByClassName("card")
      let dots = document.getElementsByClassName("slider-nav-elm")
      for (i = 0; i < slides.length; i++) {
        slides[i].style.cssText = "opacity: 0; transition: 1s"
      }
      slideIndex++
      console.log(`slideIndex ${slideIndex}`)
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.cssText = "opacity: 1; transition: 1s"

      if (slideIndex === 1) {
        document.getElementById("slide-nav-1").style.backgroundColor =
          "rgba(237, 32, 36, 0.7)"
        document.getElementById("slide1").style.opacity = "1"
      } else {
        document.getElementById("slide-nav-1").style.backgroundColor = ""
        document.getElementById("slide1").style.opacity = "0"
      }
      if (slideIndex === 2) {
        document.getElementById("slide-nav-2").style.backgroundColor =
          "rgba(237, 32, 36, 0.7)"
        document.getElementById("slide2").style.opacity = "1"
      } else {
        document.getElementById("slide-nav-2").style.backgroundColor = ""
        document.getElementById("slide2").style.opacity = "0"
      }
      if (slideIndex === 3) {
        document.getElementById("slide-nav-3").style.backgroundColor =
          "rgba(237, 32, 36, 0.7)"
        document.getElementById("slide3").style.opacity = "1"
      } else {
        document.getElementById("slide-nav-3").style.backgroundColor = ""
        document.getElementById("slide3").style.opacity = "0"
      }
      if (slideIndex === 4) {
        document.getElementById("slide-nav-4").style.backgroundColor =
          "rgba(237, 32, 36, 0.7)"
        document.getElementById("slide4").style.opacity = "1"
      } else {
        document.getElementById("slide-nav-4").style.backgroundColor = ""
        document.getElementById("slide4").style.opacity = "0"
      }
      // console.log(slideIndex)
      setTimeout(showSlides, 6000)
    }
  })

  return (
    <SliderCss>
      <div id="slider-container">
        <div id="slide1" className="card">
          <img src={SlideImage1} alt="" />
          <div className="slide-text">
            <p>
              <img
                style={{ borderRadius: "5px" }}
                src={SanitationLogo}
                alt="Sanitation Zero"
              />
              <h4 style={{ margin: "0" }}>
                Make Unlimited Amounts Of Oxidizing Solution.
              </h4>
              Ordinary tap water in the solution tank is transformed into
              aqueous ozone, which like chlorine is a powerful oxidizer.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div id="slide2" className="card">
          <img src={SlideImage2} alt="" />
          <div className="slide-text">
            <p>
              <h2>Industrial Floor Scrubbers</h2>
              Factory Cat is known World Wide for their industrial strength and
              quality design when it comes to Walk Behind Scrubber Dryers.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div id="slide3" className="card">
          <img src={SlideImage3} alt="" />
          <div className="slide-text">
            <p>
              <h2>GTR</h2>
              <h3>A new and powerful workhorse to the Industrial Market.</h3>
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div id="slide4" className="card">
          <img src={SlideImage4} alt="" />
          <div className="slide-text">
            <p>
              <h2>Industrial Floor Scrubbers</h2>
              The Model 34 floor sweeper is the machine that founded our company
              and has remained the same machine since inception 25 years ago.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div id="slider-nav-container">
        <div
          onClick={handleSlide1Click}
          id="slide-nav-1"
          className="slider-nav-elm"
        >
          <p>Sanitation</p>
        </div>

        <div
          onClick={handleSlide2Click}
          id="slide-nav-2"
          className="slider-nav-elm"
        >
          <p>Industrial Floor Scrubbers</p>
        </div>
        <div
          onClick={handleSlide3Click}
          id="slide-nav-3"
          className="slider-nav-elm"
        >
          <p>GTR</p>
        </div>
        <div
          onClick={handleSlide4Click}
          id="slide-nav-4"
          className="slider-nav-elm"
        >
          <p>Industrial Floor Sweepers</p>
        </div>
      </div>

      {/* <div className="link-container">
        <div className="card-selector"></div>
        <div className="card-selector"></div>
        <div className="card-selector"></div>
        <div className="card-selector"></div>
      </div> */}
      {/* <div className="gallery">
        <div id="slide-1" className="slide-container">
          <img src={SlideImage1} alt="" />
          <div className="slide-info" id="slide-info1">
            <h2>Industrial Floor Scrubbers</h2>
            <p>
              Factory Cat is known World Wide for their industrial strength and
              quality design when it comes to Walk Behind Scrubber Dryers.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div id="slide-2" className="slide-container">
          <img src={SlideImage2} alt="" />
          <div className="slide-info" id="slide-info2">
            <h2>Industrial Floor Scrubbers</h2>
            <p>
              Factory Cat is known World Wide for their industrial strength and
              quality design when it comes to Walk Behind Scrubber Dryers.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div id="slide-3" className="slide-container">
          <img src={SlideImage3} alt="" />
          <div className="slide-info" id="slide-info2">
            <h2>Industrial Floor Scrubbers</h2>
            <p>
              Factory Cat is known World Wide for their industrial strength and
              quality design when it comes to Walk Behind Scrubber Dryers.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div id="slide-4" className="slide-container">
          <img src={SlideImage4} alt="" />
          <div className="slide-info" id="slide-info2">
            <h2>Industrial Floor Scrubbers</h2>
            <p>
              Factory Cat is known World Wide for their industrial strength and
              quality design when it comes to Walk Behind Scrubber Dryers.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div onClick={handleClick} id="slider-nav">
        <a href="#slide-1">
          <div id="nav-1" className={navFocus}>
            <p>Here is Slide 1</p>
          </div>
        </a>
        <a href="#slide-2">
          <div id="nav-2" className={navFocus}>
            <p>Here is Slide 2 with some other text</p>
          </div>
        </a>
        <a href="#slide-3">
          <div id="nav-3" className={navFocus}>
            <p>Here is Slide 3 </p>
          </div>
        </a>
        <a href="#slide-4">
          <div id="nav-4" className={navFocus}>
            <p>Here is Slide 4 This one might have even more</p>
          </div>
        </a>
      </div> */}
    </SliderCss>
  )
}

export default Slider
