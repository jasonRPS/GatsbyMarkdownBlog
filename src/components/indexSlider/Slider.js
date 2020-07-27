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
    max-width: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 1rem;
    position: absolute;
    top: 120px;
    right: 50px;

    h2 {
      margin: 0;
    }

    /* p {
      margin: 0;
      line-height: 2rem;
    } */

    button {
      background: red;
      border: none;
      color: white;
      padding: 0.5rem;
    }

    @media (max-width: 460px) {
      max-width: 100%;
      top: 0;
      right: auto;
      left: auto;
    }
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
  const [slideIndex, setSlideIndex] = useState(0)
  const [dots, setDots] = useState("active")
  useEffect(() => {
    // function showSlides() {
    //   let i
    //   let slides = document.getElementsByClassName("mySlides")
    //   let dots = document.getElementsByClassName("dot")
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none"
    //   }
    //   slideIndex++
    //   if (slideIndex > slides.length) {
    //     slideIndex = 1
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "")
    //   }
    //   slides[slideIndex - 1].style.display = "block"
    //   dots[slideIndex - 1].className += " active"
    //   setTimeout(showSlides, 7000) // Change image every 7 seconds
    // }
    // showSlides()
  }, [])

  return (
    <>
      <SlideShowContainer>
        <Slide className="mySlides fade">
          <img src={SlideImage1} alt="" />
          <div className="text-content">
            <h2>Here is the slide Title 1</h2>
            <p>
              Here is some information about the slide. It should be information
              that anyone could care about. And is there is more information the
              box shouold grow with out too much issue.
            </p>
            <button>Learn More</button>
          </div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage2} alt="" />
          <div className="text-content">
            <h2>Here is the slide Title 2</h2>
            <p>
              Here is some information about the slide. It should be information
              that anyone could care about
            </p>
            <button>Learn More</button>
          </div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage3} alt="" />
          <div className="text-content">
            <h2>Here is the slide Title 3</h2>
            <p>
              Here is some information about the slide. It should be information
              that anyone could care about
            </p>
            <button>Learn More</button>
          </div>
        </Slide>
        <Slide className="mySlides fade">
          <img src={SlideImage4} alt="" />
          <div className="text-content">
            <h2>Here is the slide Title 4</h2>
            <p>
              Here is some information about the slide. It should be information
              that anyone could care about
            </p>
            <button>Learn More</button>
          </div>
        </Slide>
      </SlideShowContainer>
      <DotsContainer>
        <div onClick={() => (slideIndex = 0)} className="dot"></div>
        <div onClick={() => (slideIndex = 1)} className="dot"></div>
        <div onClick={() => (slideIndex = 2)} className="dot"></div>
        <div onClick={() => (slideIndex = 3)} className="dot"></div>
      </DotsContainer>
    </>
  )
}

export default Slider
