import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1400px;
  margin: 1.5rem auto;
  height: 700px;
  overflow: hidden;

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
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 250px;
  margin: 10px 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    display: none;
    position: absolute;
    color: white;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 1rem 0;
    animation: slideIn ease 0.5s;

    @keyframes slideIn {
      0% {
        margin-bottom: -150px;
      }
      100% {
        margin-bottom: 0;
      }
    }

    h4 {
      margin: 0;
      padding-left: 1rem;
    }
  }

  &:hover {
    .overlay {
      display: block;
    }
  }
`

const ThumbOverlay = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 1rem 0;
  animation: slideIn ease 0.5s;

  @keyframes slideIn {
    0% {
      margin-bottom: -150px;
    }
    100% {
      margin-bottom: 0;
    }
  }

  h4 {
    margin: 0;
    padding-left: 1rem;
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
  z-index: 3;

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

  button {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: white;
    background-color: red;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
  }
`

const ToggleImages = styled.p`
  text-align: center;
  font-size: 1.5em;
  border-bottom: 4px solid red;
  max-width: 1400px;
  margin: 1rem auto;
  cursor: pointer;
`

const WalkieScrubberImages = () => {
  const [showMore, setShowMore] = useState({
    height: "700px",
    title: "Show More",
    carrot: "fas fa-sort-down",
  })
  const [machineImage, setMachineImage] = useState({})
  const [machineLink, setMachineLink] = useState({})
  const [modal, setModal] = useState({
    display: "none",
  })

  function showMoreClick() {
    if (showMore.height === "700px") {
      setShowMore({
        height: "100%",
        title: "Show Less",
        carrot: "fas fa-sort-up",
      })
    } else {
      setShowMore({
        height: "700px",
        title: "Show More",
        carrot: "fas fa-sort-down",
      })
    }
  }

  function handleImageClick(e) {
    setModal("block")
    setMachineImage(e.target.src)
    setMachineLink(e.target.dataset.link)
  }
  const data = useStaticQuery(graphql`
    query {
      allContentfulMachineImage(
        filter: { category: { eq: "Walk Behind Floor Scrubber" } }
      ) {
        edges {
          node {
            model
            link
            application
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
        <a style={{ textDecoration: "none" }} href={machineLink}>
          <button>Learn More</button>
        </a>
      </Modal>
      <StyledContainer style={{ height: showMore.height }}>
        <div className="image-header">
          <h2>Walk Behind Floor Scrubbers</h2>
        </div>
        <ThumbnailContainer>
          {data.allContentfulMachineImage.edges.map(edge => {
            return (
              <>
                <Thumbnail>
                  <img
                    onClick={handleImageClick}
                    src={edge.node.image.fixed.src}
                    data-link={edge.node.link}
                  />
                  <div className="overlay">
                    <h4>
                      Model:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {edge.node.model}
                      </span>
                    </h4>
                    <h4>
                      Application:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {edge.node.application}
                      </span>
                    </h4>
                  </div>
                </Thumbnail>
              </>
            )
          })}
        </ThumbnailContainer>
      </StyledContainer>
      <ToggleImages onClick={showMoreClick}>
        {showMore.title} <i className={showMore.carrot}></i>
      </ToggleImages>
    </>
  )
}

export default WalkieScrubberImages
