import React, { useState, useEffect } from "react"
import { SliderCss } from "./styles/SliderCss"
import { Link } from "gatsby"
import SlideImage1 from "../../images/fc-image.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"
import SlideImage5 from "../../images/fc-image5.jpg"

const Slider = () => {
  const [navFocus, setNavFocus] = useState(".nav-not-focused")
  const [slideId, setSlideId] = useState("#slide1")

  function handleClick() {
    let navEl = document.getAllElementsByClassName("slide-container").length
    console.log(navEl)
  }
  return (
    <SliderCss>
      <div className="gallery">
        <div
          onClick={handleClick}
          style={{ backgroundColor: navFocus }}
          className="slide-container"
          id="slide-1"
        >
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

        <div
          style={{ backgroundColor: navFocus }}
          className="slide-container"
          id="slide-2"
        >
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

        <div
          style={{ backgroundColor: navFocus }}
          className="slide-container"
          id="slide-3"
        >
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

        <div
          style={{ backgroundColor: navFocus }}
          className="slide-container"
          id="slide-4"
        >
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

        <div
          style={{ backgroundColor: navFocus }}
          className="slide-container"
          id="slide-5"
        >
          <img src={SlideImage5} alt="" />
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

      <div id="slider-nav">
        <a href="#slide-1">
          <div className="nav-elm">
            <p>Here is Slide 1 </p>
          </div>
        </a>
        <a href="#slide-2">
          <div className="nav-elm">
            <p>Here is Slide 2</p>
          </div>
        </a>
        <a href="#slide-3">
          <div className="nav-elm">
            <p>Here is Slide 3</p>
          </div>
        </a>
        <a href="#slide-4">
          <div className="nav-elm">
            <p>Here is Slide 4</p>
          </div>
        </a>
        <a href="#slide-5">
          <div className="nav-elm">
            <p>Here is Slide 5</p>
          </div>
        </a>
      </div>
    </SliderCss>
  )
}

export default Slider
