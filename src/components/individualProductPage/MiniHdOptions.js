import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const OptionsContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1023px) {
    max-width: 900px;
    grid-template-columns: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

const OptionsContent = styled.div`
  display: flex;
  padding-right: 10px;

  h3 {
    margin: 0;
    border-bottom: 3px solid red;
    @media (max-width: 580px) {
      font-size: 1em;
    }
    @media (max-width: 580px) {
      font-size: 1.1em;
    }
  }
  p {
    margin: 0;

    @media (max-width: 1200px) {
      font-size: 0.8em;
    }
    /* @media (max-width: 1200px) {
      font-size: 1em;
    } */
  }
`

const ThumbNail = styled.img`
  width: 300px;
  height: 200px;
  margin: 10px 10px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 280px;
    height: 187px;
  }

  @media (max-width: 1023px) {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 580px) {
    width: 280px;
    height: 187px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 107px;
  }
`
const Modal = styled.div`
  position: fixed;
  width: 900px;
  height: 600px;
  bottom: 50%;
  left: 50%;
  margin-bottom: -300px;
  margin-left: -450px;
  z-index: 2;
  border: 2px solid black;
  animation: fadeIn ease 0.5s;
  box-shadow: 10px 10px 15px #000;

  @media (max-width: 900px) {
    width: 700px;
    height: 467px;
    margin-bottom: -233.5px;
    margin-left: -350px;
  }

  @media (max-width: 700px) {
    width: 550px;
    height: 367px;
    margin-bottom: -183.5px;
    margin-left: -275px;
  }

  @media (max-width: 600px) {
    width: 480px;
    height: 320px;
    margin-bottom: -160px;
    margin-left: -240px;
  }

  @media (max-width: 540px) {
    width: 400px;
    height: 267px;
    margin-bottom: -133.5px;
    margin-left: -200px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  i {
    position: absolute;
    color: red;
    font-size: 2em;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`

const ViewMoreLess = styled.div`
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
`

const LayOver = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const ButtonCollapse = styled.button`
  position: fixed;
  bottom: 100px;
  right: 30px;
  background-color: red;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1em;
  cursor: pointer;
`

const MiniHdOptions = () => {
  const [optionImage, setOptionImage] = useState({})
  const [modal, setModal] = useState("none")
  const [viewMore, setViewMore] = useState({
    text: "View More",
    arrow: "fas fa-caret-down",
  })
  const [openOptions, setOpenOptions] = useState("450px")
  const [displayLayOver, setLayOver] = useState("none")
  const [displayButton, setDisplayButton] = useState("none")

  function handleClick(e) {
    setModal("block")
    setOptionImage(e.target.src)
    setLayOver("block")
  }

  function handleImage() {
    setModal("none")
    setLayOver("none")
  }

  function handleOptionsOpen() {
    if (viewMore.text === "View More") {
      setViewMore({
        text: "View Less",
        arrow: "fas fa-caret-up",
      })
      setDisplayButton("block")
      setOpenOptions("100%")
    } else {
      setViewMore({
        text: "View More",
        arrow: "fas fa-caret-down",
      })
      setOpenOptions("430px")
      setDisplayButton("none")
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulMachineOptions {
        edges {
          node {
            title
            model
            image {
              description
              fixed(width: 900, height: 600) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <LayOver style={{ display: displayLayOver }} />
      <OptionsContainer id="option-start" style={{ height: openOptions }}>
        {data.allContentfulMachineOptions.edges.map(edge => {
          return (
            <OptionsContent>
              <ThumbNail
                onClick={handleClick}
                src={edge.node.image.fixed.src}
              />
              <div className="options-text">
                <h3>{edge.node.title}</h3>
                <p>{edge.node.image.description}</p>
              </div>
            </OptionsContent>
          )
        })}
      </OptionsContainer>
      <Modal style={{ display: modal }}>
        <i onClick={handleImage} className="far fa-times-circle" />

        <img src={optionImage} />
      </Modal>

      <ViewMoreLess>
        <a
          style={{ color: "black", textDecoration: "none" }}
          href="#option-start"
        >
          <p onClick={handleOptionsOpen}>
            {viewMore.text} <i className={viewMore.arrow} />
          </p>
        </a>
      </ViewMoreLess>
      <a
        style={{ color: "black", textDecoration: "none" }}
        href="#option-start"
      >
        <ButtonCollapse
          onClick={handleOptionsOpen}
          style={{ display: displayButton }}
        >
          View Less
          <i
            style={{ marginLeft: "5px" }}
            onClick={handleImage}
            className={viewMore.arrow}
          />
        </ButtonCollapse>
      </a>
    </>
  )
}

export default MiniHdOptions
