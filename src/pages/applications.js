import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroHeader from "../components/HeroHeader"
import HeroImage from "../images/mini-hd-walk-behind-header.jpg"
import WarehouseImage from "../images/warehouseTEST.jpg"
import ApplicationSummary from "../components/ApplicationSummary"

const BodyContainer = styled.div`
  max-width: 1400px;
  margin: 1.5rem auto;
`

const ApplicationContainer = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 1400px;
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
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Aerospace"
            applicationDescription="High-performance cleaning capabilities offered is unparalleled in the floor machine market and ideal for the Aerospace market.  "
            link="/applications/aerospace"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Aviation"
            applicationDescription="The FactoryCat scrubbers offer deep scrubbing performance to restore hangar floors yet balanced enough to offer delicate cleaning on shiny epoxy coated hangar floors."
            link="/applications/aviation"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Building Services"
            applicationDescription="Built like a tank and the most durable cleaning machine on the market that guarantees when you need to clean FactoryCat floor machines are ready for the job."
            link="/applications/building-services"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Bulk Packaging"
            applicationDescription="Cylindrical models with dual front side brooms can sweep and scrub the floor which will offer unparalleled cleaning performance against racking and for out cleaning expansion joints."
            link="/applications/bulk-packaging"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Casino & Resort"
            applicationDescription="FactoryCat is the only company offering a nearly permanent filter with optional filtration at 0.2 microns which is 1/10th below HEPA filtration to deliver superb indoor air quality. "
            link="/applications/casino-and-resort"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Distribution"
            applicationDescription="FactoryCat is the only company offering a nearly permanent filter with optional filtration at 0.2 microns which is 1/10th below HEPA filtration to deliver superb indoor air quality. "
            link="/applications/distribution"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Education"
            applicationDescription="Offering delicate maintenance cleaning daily with the use of the brush pressure lockout but can also be switched into a high performance top scrubbing unit to save labor and remove finish quickly with their five down pressure settings.  "
            link="/applications/distribution"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Food & Beverage"
            applicationDescription="Offering delicate maintenance cleaning daily with the use of the brush pressure lockout but can also be switched into a high performance top scrubbing unit to save labor and remove finish quickly with their five down pressure settings.  "
            link="/applications/food-and-beverage"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Government"
            applicationDescription="As a taxpayer I really like to see that our government and their contractors spend the money we have entrusted them with buying Made in the USA products from domestic businesses. Factory Cat offers the government some of the most effective, most affordable, best built floor .  "
            link="/applications/food-and-beverage"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Health Care"
            applicationDescription="As a taxpayer I really like to see that our government and their contractors spend the money we have entrusted them with buying Made in the USA products from domestic businesses. Factory Cat offers the government some of the most effective, most affordable, best built floor .  "
            link="/applications/food-and-beverage"
          />
          <ApplicationSummary
            image={WarehouseImage}
            applicationName="Hospitality"
            applicationDescription="As a taxpayer I really like to see that our government and their contractors spend the money we have entrusted them with buying Made in the USA products from domestic businesses. Factory Cat offers the government some of the most effective, most affordable, best built floor .  "
            link="/applications/food-and-beverage"
          />
          {/* <div className="img-container">
            <img src={WarehouseImage} alt="aerospace" />
          </div>
          <div className="img-content">
            <h2>Warehouse</h2>
            <p style={{ maxWidth: "400px" }}>
              Cold storage warehousing poses a unique challenge for scrubbers,
              as the clean solution used must be able to accommodate the
              temperatures without freezing - For which we have our "Freezer
              Package" option.
            </p>
            <Link to="/applications/warehouse">
              <button>View More</button>
            </Link>
          </div>
          <div className="img-container">
            <img src={WarehouseImage} alt="aerospace" />
          </div>
          <div className="img-content">
            <h2>Warehouse</h2>
            <p style={{ maxWidth: "400px" }}>
              Cold storage warehousing poses a unique challenge for scrubbers,
              as the clean solution used must be able to accommodate the
              temperatures without freezing - For which we have our "Freezer
              Package" option.
            </p>
            <Link to="/applications/warehouse">
              <button>View More</button>
            </Link>
          </div> */}
        </ApplicationContainer>
      </BodyContainer>
    </Layout>
  )
}

export default ApplicationsPage
