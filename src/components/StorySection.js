import React from "react"
import { Link } from "gatsby"
import { StorySectionStyles } from "./styles/StorySectionStyles"
import USAImage from "../images/made-in-usa.png"
import Image2 from "../images/sweeper2.png"
import Image3 from "../images/sweeper3.png"

const StorySection = () => {
  return (
    <StorySectionStyles>
      <div className="parallax">
        <div id="story-board">
          <header>
            <p className="the">THE</p>
            <p
              className="factorycat"
              // style={{
              //   marginTop: "-30px",
              //   fontSize: "50px",
              //   paddingLeft: "65px",
              // }}
            >
              FACTORYCAT
            </p>
            <p
              className="story"
              // style={{
              //   color: "white",
              //   paddingLeft: "300px",
              //   fontSize: "30px",
              //   marginTop: "-80px",
              // }}
            >
              STORY
            </p>
          </header>
          <section id="body-section">
            <p>
              Factory Cat sweepers and floor scrubbers are built by the R.P.S.
              Corporation incorporated in Wisconsin since 1986. Factory Cat
              manufactures battery floor scrubbers, battery floor sweepers and
              battery sweeper / scrubber combination floor machines for the
              industrial sector. Its principals have been in the industrial
              floor cleaning machine business since 1980.{" "}
            </p>
          </section>
          <footer>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
            <img src={USAImage} alt="made in usa" />
          </footer>
        </div>
        <img src={USAImage} alt="made in usa" />
        <h1>Innovation. Heavy Duty.</h1>
      </div>
    </StorySectionStyles>
  )
}

export default StorySection
