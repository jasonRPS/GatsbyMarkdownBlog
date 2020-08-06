import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const OptionsContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  overflow: hidden;
`

const OptionsContent = styled.div`
  display: flex;
  max-width: 650px;
  height: 200px;
  margin: 0.5rem auto;

  h3 {
    margin: 0;
    border-bottom: 3px solid red;
  }
`

const ThumbNail = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`
const Modal = styled.div`
  position: absolute;
  top: 50px;
  z-index: 2;
  border: 2px solid black;
  width: 1000px;
  height: 750px;

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
  }
`

const ViewMoreLess = styled.div`
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
`

const MiniHdOptions = () => {
  const [optionImage, setOptionImage] = useState({})
  const [modal, setModal] = useState("none")
  const [viewMore, setViewMore] = useState({
    text: "View More",
    arrow: "fas fa-caret-down",
  })
  const [openOptions, setOpenOptions] = useState("430px")

  function handleClick(e) {
    setModal("block")
    setOptionImage(e.target.src)
  }

  function handleOptionsOpen() {
    if (viewMore.text === "View More") {
      setViewMore({
        text: "View Less",
        arrow: "fas fa-caret-up",
      })
      setOpenOptions("100%")
    } else {
      setViewMore({
        text: "View More",
        arrow: "fas fa-caret-down",
      })
      setOpenOptions("430px")
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
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <OptionsContainer style={{ height: openOptions }}>
        {data.allContentfulMachineOptions.edges.map(edge => {
          return (
            <OptionsContent>
              <ThumbNail
                onClick={handleClick}
                src={edge.node.image.fluid.src}
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
        <i onClick={() => setModal("none")} className="far fa-times-circle" />
        <img src={optionImage} />
      </Modal>

      <ViewMoreLess>
        <p onClick={handleOptionsOpen}>
          {viewMore.text} <i className={viewMore.arrow} />
        </p>
      </ViewMoreLess>
    </>
  )
}

export default MiniHdOptions
