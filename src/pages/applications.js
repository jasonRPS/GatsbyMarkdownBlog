import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroHeader from "../components/HeroHeader"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import WarehouseImage from "../images/warehouseTEST.jpg"

const BodyContainer = styled.div`
  max-width: 1400px;
  margin: 1.5rem auto;
`

const ApplicationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;

  .img-container {
    width: 300px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  button {
    background-color: red;
    padding: 0.5rem;
    color: white;
    border: none;
  }
`

const ApplicationsPage = () => {
  return (
    <Layout>
      <HeroHeader
        heroImage={HeroImage}
        title="FactoryCat Applications"
        subHeading="We have the right machine for you."
        buttonTitle="See Applications"
        goTo="#walkie-scrubbers"
      />
      <BodyContainer>
        <h1>Cleaning Solutions by Industry</h1>
        <p>
          Cold storage warehousing poses a unique challenge for scrubbers, as
          the clean solution used must be able to accommodate the temperatures
          without freezing - For which we have our "Freezer Package" option.
        </p>
        <ApplicationContainer>
          <div className="img-container">
            <img src={WarehouseImage} alt="aerospace" />
          </div>
          <div className="img-content">
            <h2 style={{ margin: "0" }}>Warehouse</h2>
            <p style={{ maxWidth: "400px" }}>
              Cold storage warehousing poses a unique challenge for scrubbers,
              as the clean solution used must be able to accommodate the
              temperatures without freezing - For which we have our "Freezer
              Package" option.
            </p>
            <button>View More</button>
          </div>
        </ApplicationContainer>
      </BodyContainer>
    </Layout>
  )
}

export default ApplicationsPage
