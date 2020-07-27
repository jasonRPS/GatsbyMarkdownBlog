import React, { useState, useRef } from "react"
import styled from "styled-components"
import Option from "./Option"
import BatteryWetImage from "./images/mini-hd-options-wet-batteries-square-cropped-zoomed.png"

const StyledOptionsBody = styled.div`
  position: relative;
  #body-set {
    position: relative;
    max-width: 1400px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
    overflow: hidden;
    justify-items: center;
    /* border: 4px solid green; */

    @media (max-width: 965px) {
      grid-template-columns: 100%;
    }
  }

  h2 {
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    cursor: pointer;
  }
`

const ViewButton = styled.button`
  border-radius: 5px;
  box-shadow: 5px 10px #888888;
  position: sticky;
  bottom: 100px;
  left: 90%;
  background-color: red;
  border: 2px solid black;
  padding: 1rem;
  font-size: 1em;
  color: white;
  cursor: pointer;
`

const OptionsSelect = props => {
  const content = useRef(null)
  // console.log(content.current.scrollHeight)
  const [showButton, setShowButton] = useState("none")
  const [toggle, setToggle] = useState({
    more: "View More",
    arrow: "fas fa-caret-down",
    height: "450px",
  })

  function handClick() {
    if (toggle.more === "View More") {
      setToggle({
        more: "View Less",
        arrow: "fas fa-caret-up",
        height: `${content.current.scrollHeight}px`,
      })
      setShowButton("block")
    } else {
      setToggle({
        more: "View More",
        arrow: "fas fa-caret-down",
        height: "450px",
      })
      setShowButton("none")
    }
  }

  return (
    <>
      <StyledOptionsBody>
        <div
          ref={content}
          style={{ maxHeight: toggle.height, transitionDuration: ".5s" }}
          id="body-set"
          className={toggle.height}
        >
          <Option
            image={props.image1}
            title={props.title1}
            description={props.description1}
          />
          <Option
            image={props.image2}
            title={props.title2}
            description={props.description2}
          />
          <Option
            image={props.image3}
            title={props.title3}
            description={props.description3}
          />
          <Option
            image={props.image4}
            title={props.title4}
            description={props.description4}
          />
          <Option
            image={props.image5}
            title={props.title5}
            description={props.description5}
          />
          <Option
            image={props.image6}
            title={props.title6}
            description={props.description6}
          />
          <Option
            image={props.image7}
            title={props.title7}
            description={props.description7}
          />
          <Option
            image={props.image8}
            title={props.title8}
            description={props.description8}
          />
          <Option
            image={props.image9}
            title={props.title9}
            description={props.description9}
          />
          <Option
            image={props.image10}
            title={props.title10}
            description={props.description10}
          />
          <Option
            image={props.image11}
            title={props.title11}
            description={props.description11}
          />
          <Option
            image={props.image12}
            title={props.title12}
            description={props.description12}
          />
          <Option
            image={props.image13}
            title={props.title13}
            description={props.description13}
          />
          <Option
            image={props.image14}
            title={props.title14}
            description={props.description14}
          />
          <Option
            image={props.image15}
            title={props.title15}
            description={props.description15}
          />
          <Option
            image={props.image16}
            title={props.title16}
            description={props.description16}
          />
          <Option
            image={props.image17}
            title={props.title17}
            description={props.description17}
          />
          <Option
            image={props.image18}
            title={props.title18}
            description={props.description18}
          />
          <Option
            image={props.image19}
            title={props.title19}
            description={props.description19}
          />
          <Option
            image={props.image20}
            title={props.title20}
            description={props.description20}
          />
          <Option
            image={props.image21}
            title={props.title21}
            description={props.description21}
          />
          <Option
            image={props.image22}
            title={props.title22}
            description={props.description22}
          />
          <Option
            image={props.image23}
            title={props.title23}
            description={props.description23}
          />
          <Option
            image={props.image24}
            title={props.title24}
            description={props.description24}
          />
          <Option
            image={props.image25}
            title={props.title25}
            description={props.description25}
          />
          <Option
            image={props.image26}
            title={props.title26}
            description={props.description26}
          />
          <Option
            image={props.image27}
            title={props.title27}
            description={props.description27}
          />
          <Option
            image={props.image28}
            title={props.title28}
            description={props.description28}
          />
          <Option
            image={props.image29}
            title={props.title29}
            description={props.description29}
          />
          <Option
            image={props.image30}
            title={props.title30}
            description={props.description30}
          />
          <Option
            image={props.image31}
            title={props.title31}
            description={props.description31}
          />
          <Option
            image={props.image32}
            title={props.title32}
            description={props.description32}
          />
          <Option
            image={props.image33}
            title={props.title33}
            description={props.description33}
          />
          <Option
            image={props.image34}
            title={props.title34}
            description={props.description34}
          />
          <Option
            image={props.image35}
            title={props.title35}
            description={props.description35}
          />
          <Option
            image={props.image36}
            title={props.title36}
            description={props.description36}
          />
        </div>
      </StyledOptionsBody>
      <h2
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={handClick}
      >
        {toggle.more} <i className={toggle.arrow} />
      </h2>
      <ViewButton onClick={handClick} style={{ display: showButton }}>
        View Less <i className="fas fa-caret-up" />
      </ViewButton>
    </>
  )
}

export default OptionsSelect
