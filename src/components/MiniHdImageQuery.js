import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const StyledImages = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;

  .img-container {
    position: relative;
    width: 300px;
    height: 300px;
    cursor: pointer;

    &:hover {
      .img-details {
        display: block;
        transition-duration: 0.3s;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .img-details {
    position: absolute;
    max-height: 150px;

    display: none;
    color: white;
    width: 100%;
    bottom: 0;
    /* padding: 0.5rem; */
    background: rgba(0, 0, 0, 0.5);
  }

  .large-container {
    position: absolute;
    border: 2px solid black;
    width: 1000px;
    height: 750px;
    background-color: white;
    box-shadow: 15px 10px 20px 10px;
    z-index: 3;

    i {
      color: red;
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 2em;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  button {
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 0.5rem;
    color: white;
    background: red;
    border: none;
    cursor: pointer;
  }
`

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const MiniHdImageQuery = props => {
  const [modal, setModal] = useState("none")
  const [image, setImage] = useState({})

  function openModal(e) {
    setModal("block")
    setImage(e.target.src)
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulMachineImage {
        edges {
          node {
            description {
              content {
                content {
                  value
                }
              }
            }
            model
            application
            image {
              file {
                url
              }
              title
              description
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <StyledOverlay style={{ display: modal }} />
      <StyledImages>
        {data.allContentfulMachineImage.edges.map(edge => {
          return (
            <>
              <div className="img-container">
                <img
                  onClick={openModal}
                  src={edge.node.image.file.url}
                  alt=""
                />

                <div className="img-details">
                  <p style={{ width: "90%", textAlign: "center" }}>
                    {edge.node.image.description}
                  </p>
                </div>
              </div>
            </>
          )
        })}
        <div className="large-container" style={{ display: modal }}>
          <i onClick={() => setModal("none")} className="far fa-times-circle" />
          <Link to="/walk-behind-floor-scrubbers/mini-hd">
            <button>Click Here for more Info</button>
          </Link>
          <img src={image} alt="" />
        </div>
      </StyledImages>
    </>
  )
}

export default MiniHdImageQuery
