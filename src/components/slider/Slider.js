import React, { useState, useEffect } from "react"
import { SliderCss } from "./styles/SliderCss"
import { Link } from "gatsby"
import SlideImage1 from "../../images/fc-image.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"

const Slider = () => {
  useEffect(() => {
    let slideIndex = 0
    showSlides()

    function showSlides() {
      let i
      let slides = document.getElementsByClassName("card")
      // var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.cssText = "opacity: 0; transition: 1s"
      }
      slideIndex++
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(" active", "");
      slides[slideIndex - 1].style.cssText = "opacity: 1; transition: 1s"
      // dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 6000)
    }
  })
  return (
    <SliderCss>
      <div id="slider-container">
        <div className="card">
          <img src={SlideImage1} alt="" />
          <div className="slide-text">
            <p>
              <h3>Hello World</h3>
              Here is some great info about slide 1. It is the best info ever.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={SlideImage2} alt="" />
          <div className="slide-text">
            <p>
              <h3>Slide 2</h3>
              Here is some great info about slide 1. It is the best info ever.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={SlideImage3} alt="" />
          <div className="slide-text">
            <p>
              <h3>Hello World Slide 3</h3>
              Here is some great info about slide 1. It is the best info ever.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={SlideImage4} alt="" />
          <div className="slide-text">
            <p>
              <h3>Hello Everyone 4</h3>
              Here is some great info about slide 1. It is the best info ever.
              Here is some great info about slide 1. It is the best info ever.
              Here is some great info about slide 1. It is the best info ever.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div id="slider-nav-container">
        <div className="slider-nav-elm">
          <p>Something Great with some info about something</p>
        </div>
        <div className="slider-nav-elm">
          <p>Here is Info about this slide</p>
        </div>
        <div className="slider-nav-elm">
          <p>AWESOME</p>
        </div>
        <div className="slider-nav-elm">
          <p>THIS IS THE LAST SLIDE</p>
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
