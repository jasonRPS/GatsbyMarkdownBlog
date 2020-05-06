import React, { useState, useEffect } from "react"
import { SliderCss } from "./styles/SliderCss"
import { Link } from "gatsby"
import SlideImage1 from "../../images/fc-image.jpg"
import SlideImage2 from "../../images/fc-image2.jpg"
import SlideImage3 from "../../images/fc-image3.jpg"
import SlideImage4 from "../../images/fc-image4.jpg"
import SlideImage5 from "../../images/fc-image5.jpg"

const Slider = () => {
  const [navFocus, setNavFocus] = useState("nav-elm")
  const [slideId, setSlideId] = useState("nav-1")

  function handleClick(e) {
    let slides = e.target.id
  }

  return (
    <SliderCss>
      <div className="gallery">
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

        <div id="slide-5" className="slide-container">
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
        <a href="#slide-5">
          <div id="nav-5" className={navFocus}>
            <p>Here is Slide 5</p>
          </div>
        </a>
      </div>
    </SliderCss>
  )
}

export default Slider
