import React from "react"
import FeaturedProduct from "../components/individualProductPage/FeaturedProduct"
import Layout from "../components/Layout"
import styled from "styled-components"

//Thumbnail Images
import CylindricalThumb1Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb1.jpg"
import CylindricalThumb2Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb2.jpg"
import CylindricalThumb3Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb3.jpg"
import CylindricalThumb4Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb4.jpg"
import CylindricalThumb5Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb5.jpg"
import DiskThumb1 from "../components/individualProductPage/images/mini-hd-disk-thumb1.jpg"
import DiskThumb2 from "../components/individualProductPage/images/mini-hd-disk-thumb2.jpg"
import DiskThumb3 from "../components/individualProductPage/images/mini-hd-disk-thumb3.jpg"
import DiskThumb4 from "../components/individualProductPage/images/mini-hd-disk-thumb4.jpg"
import DiskThumb5 from "../components/individualProductPage/images/mini-hd-disk-thumb5.jpg"
//End Thumbnail Images

//Main Images
import CylindricalMain1Image from "../components/individualProductPage/images/mini-hd-cylindrical-main1.jpg"
import CylindricalMain2Image from "../components/individualProductPage/images/mini-hd-cylindrical-main2.jpg"
import CylindricalMain3Image from "../components/individualProductPage/images/mini-hd-cylindrical-main3.jpg"
import CylindricalMain4Image from "../components/individualProductPage/images/mini-hd-cylindrical-main4.jpg"
import CylindricalMain5Image from "../components/individualProductPage/images/mini-hd-cylindrical-main5.jpg"
import DiskMain1Image from "../components/individualProductPage/images/mini-hd-disk-main1.jpg"
import DiskMain2Image from "../components/individualProductPage/images/mini-hd-disk-main2.jpg"
import DiskMain3Image from "../components/individualProductPage/images/mini-hd-disk-main3.jpg"
import DiskMain4Image from "../components/individualProductPage/images/mini-hd-disk-main4.jpg"
import DiskMain5Image from "../components/individualProductPage/images/mini-hd-disk-main5.jpg"
import MediaTile from "../components/individualProductPage/MediaTile"
import MainSpecBar from "../components/individualProductPage/FeaturedProduct/MainSpecBar"
import MadeInUSA from "../components/individualProductPage/MadeInUSA"
import SectionTitle from "../components/common/SectionTitle"
import MachineOverview from "../components/individualProductPage/MachineOverview"
import HeavyDuty from "../components/individualProductPage/HeavyDuty"
import MachineDimensions from "../components/individualProductPage/MachineDimensions"
import OptionsSections from "../components/individualProductPage/OptionsSections"
import OptionsSelect from "../components/individualProductPage/OptionsSelect"
import { OptionsBar } from "../components/individualProductPage/FeaturedProduct/FeaturedProductStyles/OptionsBar"
//End Main Images

//Option Images
import OptionImage1 from "../components/individualProductPage/images/battery.jpg"
import OptionImage2 from "../components/individualProductPage/images/blue-battery.jpg"
import OptionImage3 from "../components/individualProductPage/images/green-machine.jpg"
import OptionImage4 from "../components/individualProductPage/images/red-water.jpg"

const MediaTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 840px) {
    max-width: 650px;
  }
`

const TestPage = props => {
  return (
    <>
      <Layout>
        <FeaturedProduct
          cylindricalThumb1={CylindricalThumb1Image}
          cylindricalThumb2={CylindricalThumb2Image}
          cylindricalThumb3={CylindricalThumb3Image}
          cylindricalThumb4={CylindricalThumb4Image}
          cylindricalThumb5={CylindricalThumb5Image}
          cylindricalMain1={CylindricalMain1Image}
          cylindricalMain2={CylindricalMain2Image}
          cylindricalMain3={CylindricalMain3Image}
          cylindricalMain4={CylindricalMain4Image}
          cylindricalMain5={CylindricalMain5Image}
          diskThumb1={DiskThumb1}
          diskThumb2={DiskThumb2}
          diskThumb3={DiskThumb3}
          diskThumb4={DiskThumb4}
          diskThumb5={DiskThumb5}
          diskMain1={DiskMain1Image}
          diskMain2={DiskMain2Image}
          diskMain3={DiskMain3Image}
          diskMain4={DiskMain4Image}
          diskMain5={DiskMain5Image}
          title="Mini-HD Walk Behind Floor Scrubber"
          textContent="Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made
          consistent cleaning and being budget conscious our top priorities while
          delivering a durable floor scrubber that will last for years. Maintain
          cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and
          other applications. The scrub brushes are installed and removed without
          tools to allow ease when switching between application’s needs. The
          squeegee blades can be rotated or flipped without tools. Ensure complete
          cleaning in a variety of sized applications with a reliable scrubber."
          mobileTitle="Mini-HD Walk Behind Floor Scrubber"
        />
        <MediaTilesContainer>
          <MediaTile
            title="You Be the Judge"
            subTitle="Walk Behind Floor Scrubbers"
          />
          <MediaTile title="Videos" subTitle="Walk Behind Floor Scrubbers" />
          <MediaTile title="Images" subTitle="Walk Behind Floor Scrubbers" />
          <MediaTile
            title="Applications"
            subTitle="Walk Behind Floor Scrubbers"
          />
        </MediaTilesContainer>
        <MainSpecBar />
        <MadeInUSA />
        <SectionTitle title="Machine Overview" />
        <MachineOverview />
        <HeavyDuty />
        <MachineDimensions />
        <OptionsBar>Options</OptionsBar>
        <OptionsSelect
          image1={OptionImage1}
          title1="Battery - Lead Acid (WET)"
          description1="The most economic battery on the market, tried and true. With proper maintenance the battery will perform as needed without fail."
          image2={OptionImage2}
          title2="Battery - Maintenance Free (AGM)"
          description2="Spill proof, charge faster, no maintenance required. Simply plug and play.*Requires universal charger."
          image3={OptionImage3}
          title3="Single Point Watering System"
          description3="Ensure proper Electrolyte levels with this system that connects all batteries to each other with hoses."
          image4={OptionImage4}
          title4="O3 + Package"
          description4="Clean your way on the fly with the O3+ package. Seamlessly switch between chemical and Chemical free ZerO3 with just the flip of a switch. We provide a sample of chemical as well as the proper squeegee blades for the ZerO3 system."
          title5="AGM 24V/27A, w/ Inhibit, CE & CEC"
          description5="Onboard Universal charger for AGM battery setup"
          title6="AGM 24V/27A, w/ Inhibit, CE & CEC"
          description6="Onboard Universal charger for AGM battery setup"
        />
      </Layout>
    </>
  )
}

export default TestPage
