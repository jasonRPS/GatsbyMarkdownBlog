import React from "react"
import styled from "styled-components"

const FeaturesStyles = styled.div`
  #features-container {
    background-color: white;
    display: flex;
    width: 80%;
    margin: 2rem auto;
    justify-content: space-evenly;

    ul {
      li {
        font-size: 1.2em;
        margin: 1rem 1rem;
        list-style-type: none;
      }

      li:before {
        content: "\f058";
        font-size: 1.5em;
        font-family: "Font Awesome 5 Free";
        color: red;
        margin-left: -20px;
        margin-right: 10px;
      }
    }
  }
`

const FeaturesSection = () => {
  return (
    <FeaturesStyles>
      <div id="features-container">
        <ul>
          <li>Test Lamps, Ballast and Pins: Complete 3-in-1 solution</li>
          <li>Non-conductive antenna sleeve allows for safe testing</li>
          <li>Visual and audible tool feedback to easily confirm testing</li>
          <li>Dial and buttons positioned for one-handed use</li>
        </ul>
        <ul>
          <li>Durable tool that continues to work after a 6.5 foot drop</li>
          <li>
            2.5’ Fully retractable antenna for extended reach when testing
          </li>
          <li>Removable antenna adapter improves lamp test response</li>
          <li>Built-in LED flashlight illuminates dark work spaces</li>
        </ul>
      </div>
    </FeaturesStyles>
  )
}
export default FeaturesSection
