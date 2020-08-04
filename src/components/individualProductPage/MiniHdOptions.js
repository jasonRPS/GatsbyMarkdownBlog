import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const OptionsContainer = styled.div``

const OptionsContent = styled.div`
  display: flex;
`

const ThumbNail = styled.img`
  width: 300px;
  height: 200px;
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

const MiniHdOptions = () => {
  const [optionImage, setOptionImage] = useState({})
  const [modal, setModal] = useState("none")

  function handleClick(e) {
    setModal("block")
    setOptionImage(e.target.src)
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
      <OptionsContainer>
        {data.allContentfulMachineOptions.edges.map(edge => {
          return (
            <OptionsContent>
              <ThumbNail
                onClick={handleClick}
                src={edge.node.image.fluid.src}
              />
              <div>
                <h2>{edge.node.title}</h2>
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
    </>
  )
}

export default MiniHdOptions
