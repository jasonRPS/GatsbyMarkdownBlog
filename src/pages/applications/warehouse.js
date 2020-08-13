import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import HeroHeader from "../../components/HeroHeader"
import HeroImage from "../../images/mini-hd-walk-behind-header.jpg"

const PageBody = styled.main`
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    font-size: 2.5em;
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 910px) {
    width: 750px;
    height: 500px;
    margin-bottom: -250px;
    margin-left: -375px;
  }

  @media (max-width: 775px) {
    width: 600px;
    height: 400px;
    margin-bottom: -200px;
    margin-left: -300px;
  }

  @media (max-width: 625px) {
    width: 450px;
    height: 300px;
    margin-bottom: -150px;
    margin-left: -225px;
  }

  @media (max-width: 475px) {
    width: 350px;
    height: 233px;
    margin-bottom: -116.5px;
    margin-left: -175px;
  }

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
    background-color: transparent;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    transition-duration: 0.3s;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  #machine-btn {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }

  #application-btn {
    position: absolute;
    bottom: 30px;
    left: 145px;
  }
`

const StyledImageGalleryHeader = styled.h2`
  max-width: 1400px;
  margin: 1rem auto;
  border-bottom: 2px solid red;
`

const StyledImageGallery = styled.div`
  max-width: 1400px;
  display: flex;
  flex-flow: row wrap;
  margin: 1rem auto;
  justify-content: space-between;
`

const Thumbnail = styled.div`
  position: relative;
  max-width: 330px;
  max-height: 330px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    bottom: 0;
    color: white;
    animation: slideIn ease 0.5s;
    pointer-events: none;

    @keyframes slideIn {
      0% {
        margin-bottom: -150px;
      }
      100% {
        margin-bottom: 0;
      }
    }

    h4 {
      margin-left: 15px;
    }

    a {
      text-decoration: none;
      color: white;
      pointer-events: auto;
      &:hover {
        color: red;
      }
    }
  }

  &:hover {
    .overlay {
      display: block;
    }
  }
`

const BackButton = styled.button`
  margin: 2rem;
  font-size: 1em;
  border: none;
  padding: 1rem;
  background-color: red;
  color: white;
  cursor: pointer;
`

const WarehousePage = () => {
  const [modal, setModal] = useState({
    display: "none",
    name: "",
  })
  const [machineImage, setMachineImage] = useState({})
  const [machineLink, setMachineLink] = useState({})

  const [model, setModel] = useState({
    name: "",
  })

  function handleImageClick(e) {
    setModal({
      display: "block",
      name: e.target.dataset.model,
    })
    setMachineImage(e.target.src)
    setMachineLink(e.target.dataset.link)
    setModel({ name: e.target.dataset.model })
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulMachineImage(filter: { application: { eq: "Warehouse" } }) {
        edges {
          node {
            model
            link
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
          <button id="machine-btn">{model.name} Page</button>
        </a>
      </Modal>
      <Layout>
        <HeroHeader
          heroImage={HeroImage}
          // title="Warehouse Application"
          // subHeading="Keep Your Unique Warehouse Clean with Our Specialized Products."
          buttonTitle="See More"
          showButton="none"
        />
        <PageBody>
          <h1>Warehouse</h1>
          <p>
            Warehousing companies often invest in a scrubber-sweeper from
            Factory Cat, to keep inventory items free of dust while in storage
            or transit. We have seen a marked increase in the number of
            customers who are using the Walk Behind Sweeper and Compact Rider
            Sweeper (TR) to clean the inside of trailers while at the loading
            docks. While scrubbing is still the most popular answer for cleaning
            cold storage floors, we suggest customers consider a sweeper as
            well. In comparison to a scrubber, a sweeper may offer the customer
            satisfactory frequent cleaning results, and without the additional
            cost and complexity of scrubbing.
          </p>
          <h2>
            Keep Your Unique Warehouse Clean with Our Specialized Products:
          </h2>
          <ul>
            <li>
              Cold storage warehousing poses a unique challenge for scrubbers,
              as the clean solution used must be able to accommodate the
              temperatures without freezing - For which we have our "Freezer
              Package" option.
            </li>
            <li>
              In only a matter of minutes, an entire trailer can be swept clean
              of debris and dust, allowing delivery of product to maintain the
              same standards that were first established inside the warehouse.
            </li>
          </ul>
        </PageBody>
        <StyledImageGalleryHeader>
          Warehouse Image Gallery
        </StyledImageGalleryHeader>
        <StyledImageGallery>
          {data.allContentfulMachineImage.edges.map(edge => {
            return (
              <Thumbnail>
                <img
                  onClick={handleImageClick}
                  src={edge.node.image.fixed.src}
                  alt={edge.node.model}
                  data-model={edge.node.model}
                  data-link={edge.node.link}
                />
                <div className="overlay">
                  <h4>
                    Model:{" "}
                    <a href={edge.node.link}>
                      <span style={{ fontWeight: "normal" }}>
                        {edge.node.model}
                      </span>
                    </a>
                  </h4>
                </div>
              </Thumbnail>
            )
          })}
        </StyledImageGallery>
        <Link to="/applications">
          <BackButton>All Applications</BackButton>
        </Link>
      </Layout>
    </>
  )
}

export default WarehousePage
