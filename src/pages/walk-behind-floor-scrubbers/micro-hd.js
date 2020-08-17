import React from "react"
import FeaturedProduct from "../../components/individualProductPage/FeaturedProduct"
import Layout from "../../components/Layout"
import styled from "styled-components"
import RequestDemoForm from "../../components/individualProductPage/RequestDemoForm"
import StealBackground from "../../components/individualProductPage/images/steal-background.jpg"
import SpecBarMachineImage from "../../components/individualProductPage/images/mini-hd-25c-cylindrical-profile.56.png"
import UsaBackground from "../../components/individualProductPage/images/made-in-usa.jpg"
import MachineOverviewImage from "../../components/individualProductPage/images/mini-hd-machineoverview-2-test.jpg"
import HeavyDutyBackground from "../../components/individualProductPage/images/heavy-duty-background.jpg"
import MachineDimensionImage from "../../components/individualProductPage/images/mini-hd-machine-cad-drawings-size-top.jpg"

//Thumbnail Images
import CylindricalThumb1Image from "../../components/individualProductPage/images/mini-hd-cylindrical-thumb1.jpg"
import CylindricalThumb2Image from "../../components/individualProductPage/images/mini-hd-cylindrical-thumb2.jpg"
import CylindricalThumb3Image from "../../components/individualProductPage/images/mini-hd-cylindrical-thumb3.jpg"
import CylindricalThumb4Image from "../../components/individualProductPage/images/mini-hd-cylindrical-thumb4.jpg"
import CylindricalThumb5Image from "../../components/individualProductPage/images/mini-hd-cylindrical-thumb5.jpg"
import DiskThumb1 from "../../components/individualProductPage/images/mini-hd-disk-thumb1.jpg"
import DiskThumb2 from "../../components/individualProductPage/images/mini-hd-disk-thumb2.jpg"
import DiskThumb3 from "../../components/individualProductPage/images/mini-hd-disk-thumb3.jpg"
import DiskThumb4 from "../../components/individualProductPage/images/mini-hd-disk-thumb4.jpg"
import DiskThumb5 from "../../components/individualProductPage/images/mini-hd-disk-thumb5.jpg"
//End Thumbnail Images

//Main Images
import CylindricalMain1Image from "../../components/individualProductPage/images/mini-hd-cylindrical-main1.jpg"
import CylindricalMain2Image from "../../components/individualProductPage/images/mini-hd-cylindrical-main2.jpg"
import CylindricalMain3Image from "../../components/individualProductPage/images/mini-hd-cylindrical-main3.jpg"
import CylindricalMain4Image from "../../components/individualProductPage/images/mini-hd-cylindrical-main4.jpg"
import CylindricalMain5Image from "../../components/individualProductPage/images/mini-hd-cylindrical-main5.jpg"
import DiskMain1Image from "../../components/individualProductPage/images/mini-hd-disk-main1.jpg"
import DiskMain2Image from "../../components/individualProductPage/images/mini-hd-disk-main2.jpg"
import DiskMain3Image from "../../components/individualProductPage/images/mini-hd-disk-main3.jpg"
import DiskMain4Image from "../../components/individualProductPage/images/mini-hd-disk-main4.jpg"
import DiskMain5Image from "../../components/individualProductPage/images/mini-hd-disk-main5.jpg"
import MediaTile from "../../components/individualProductPage/MediaTile"
import MainSpecBar from "../../components/individualProductPage/FeaturedProduct/MainSpecBar"
import MadeInUSA from "../../components/individualProductPage/MadeInUSA"
import SectionTitle from "../../components/common/SectionTitle"
import MachineOverview from "../../components/individualProductPage/MachineOverview"
import HeavyDuty from "../../components/individualProductPage/HeavyDuty"
import MachineDimensions from "../../components/individualProductPage/MachineDimensions"

import { OptionsBar } from "../../components/individualProductPage/FeaturedProduct/FeaturedProductStyles/OptionsBar"
//End Main Images

import MiniHdOptions from "../../components/individualProductPage/MiniHdOptions"

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

const MicroHDProductPage = props => {
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
          brochureLink="http://www.factorycat.com/docs/brochures/FC-MINI-HD-BROCHURE.pdf"
          techLink="https://www.factorycat.com/docs/techSpecs/FC-MINI-HD-SALESSHEET.pdf"
          partsLink="https://www.factorycat.com/docs/manualsParts/FC-MINI-HD-P-EN.pdf"
          opLink="https://www.factorycat.com/docs/manualsOp/FC-MINI-HD-OP-EN.pdf"
          title="Micro-HD Walk Behind Floor Scrubber"
          textContent="Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made
          consistent cleaning and being budget conscious our top priorities while
          delivering a durable floor scrubber that will last for years. Maintain
          cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and
          other applications. The scrub brushes are installed and removed without
          tools to allow ease when switching between application’s needs. The
          squeegee blades can be rotated or flipped without tools. Ensure complete
          cleaning in a variety of sized applications with a reliable scrubber."
          mobileTitle="Mini-HD Walk Behind Floor Scrubber"
          pageUrl=""
          specifications="Cleaning Path: 25-29 | Run Time: 3.5 Hours | Tank Capacity: Sol: 21 Gal, Rec: 23 Gal"
          videoSource="https://www.youtube.com/embed/NaGoDJxcSGM"
        />
        <MediaTilesContainer>
          <MediaTile
            title="Why FactoryCat ?"
            subTitle="Walk Behind Floor Scrubbers"
          />
          <MediaTile title="Videos" subTitle="Walk Behind Floor Scrubbers" />
          <MediaTile
            link="/images#walkie-scrubbers"
            title="Images"
            subTitle="Walk Behind Floor Scrubbers"
          />
          <MediaTile
            title="Applications"
            subTitle="Walk Behind Floor Scrubbers"
          />
        </MediaTilesContainer>
        <MainSpecBar
          bgImage={StealBackground}
          machineImage={SpecBarMachineImage}
          myColor="white"
        />
        <MadeInUSA bgImage={UsaBackground} />
        <SectionTitle title="Machine Overview" />
        <MachineOverview image={MachineOverviewImage} />
        <HeavyDuty
          bgImage={HeavyDutyBackground}
          innerText="HEAVY DUTY CLEANING"
        />
        <MachineDimensions
          image={MachineDimensionImage}
          sizeTitle="Size (L x W x H):"
          size='52" x 37" x 40'
          weightTitle="Weight (w/o batteries):"
          weight="393 - 443 lbs"
          voltageTitle="System Voltage:"
          voltage="24 VDC"
          stdBatteryTitle="Standard Battery:"
          battery="210 ah WET"
          powerTitle="Power:"
          power="0.75hp"
          tankTitle="Tank Material:"
          tank="Poly 3/8"
        />
        <OptionsBar>Options</OptionsBar>
        <MiniHdOptions />

        <div id="demo-form"></div>
        <SectionTitle title="Request a Demo" />

        <RequestDemoForm />
      </Layout>
    </>
  )
}

export default MicroHDProductPage
