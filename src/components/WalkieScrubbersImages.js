import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1400px;
  /* border: 2px solid black; */
  margin: 1.5rem auto;

  .image-header {
    width: 1400px;
    height: 150px;
    background-color: green;
  }
`
const ThumbnailContainer = styled.div`
  display: flex;
  max-width: 1400px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const Thumbnail = styled.div`
  width: 250px;
  height: 250px;
  margin: 10px 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Modal = styled.div`
  position: fixed;
  width: 900px;
  height: 600px;
  bottom: 50%;
  margin-bottom: -300px;
  left: 50%;
  margin-left: -450px;
  background-color: green;
  animation: fadeIn ease 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  i {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    color: red;
    font-size: 2em;
    cursor: pointer;
  }
`

const WalkieScrubberImages = () => {
  const [machineImage, setMachineImage] = useState({})
  const [modal, setModal] = useState({
    display: "none",
  })

  function handleImageClick(e) {
    setModal("block")
    setMachineImage(e.target.src)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulMachineImage {
        edges {
          node {
            model
            image {
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
      <Modal style={{ display: modal.display }}>
        <img src={machineImage} />
        <i
          onClick={() => setModal({ display: "none" })}
          className="far fa-times-circle"
        />
      </Modal>
      <StyledContainer>
        <div className="image-header"></div>
        <ThumbnailContainer>
          {data.allContentfulMachineImage.edges.map(edge => {
            return (
              <Thumbnail>
                <img
                  onClick={handleImageClick}
                  src={edge.node.image.fixed.src}
                />
              </Thumbnail>
            )
          })}
        </ThumbnailContainer>
        <p>Show More</p>
      </StyledContainer>
    </>
  )
}

export default WalkieScrubberImages
