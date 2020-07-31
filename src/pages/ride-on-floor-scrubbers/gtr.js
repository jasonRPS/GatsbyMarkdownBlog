import React from "react"
import FeaturedProduct from "../../components/individualProductPage/FeaturedProduct"
import Layout from "../../components/Layout"
import styled from "styled-components"
import RequestDemoForm from "../../components/individualProductPage/RequestDemoForm"
import StealBackground from "../../components/individualProductPage/images/steal-background.jpg"
import SpecBarMachineImage from "../../components/individualProductPage/images/mini-hd-25c-cylindrical-profile.56.png"
import UsaBackground from "../../components/individualProductPage/images/made-in-usa.jpg"
import MachineOverviewImage from "../../components/individualProductPage/images/mini-hd-machine-overview.png"
import HeavyDutyBackground from "../../components/individualProductPage/images/heavy-duty-background.jpg"
import MachineDimensionImage from "../../components/individualProductPage/images/machine-spec-line-drawing.jpg"

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
import OptionsSections from "../../components/individualProductPage/OptionsSections"
import OptionsSelect from "../../components/individualProductPage/OptionsSelect"
import { OptionsBar } from "../../components/individualProductPage/FeaturedProduct/FeaturedProductStyles/OptionsBar"
//End Main Images

//Option Images
import BatteryWetImage from "../../components/individualProductPage/images/battery-wet.jpg"
import SinglePointFillImage from "../../components/individualProductPage/images/mini-hd-option3-single-point-fill-darker.png"
import BatteryAgmImage from "../../components/individualProductPage/images/mini-hd-option3-AGM-batteries-darker.png"
import OnboardChargerImage from "../../components/individualProductPage/images/mini-hd-option3-onboard-charger-darker.png"
import GreenTankImage from "../../components/individualProductPage/images/green-antiTank.jpg"
import SprayWandLessImage from "../../components/individualProductPage/images/mini-hd-option3-spray-wand-less-darker.jpg"
import VacuumWandImage from "../../components/individualProductPage/images/mini-hd-option3-vac-wand-less-dark.jpg"
import VacuumWandFlipImage from "../../components/individualProductPage/images/mini-hd-option3-flip-wand.jpg"
import GreyTiresImage from "../../components/individualProductPage/images/mini-hd-option3-grey-pneumatic-tires.jpg"
import BlackTiresImage from "../../components/individualProductPage/images/mini-hd-option3-pneumatic-tires-black.jpg"
import TapeSwitchDriveImage from "../../components/individualProductPage/images/mini-hd-option3-tape-switch-estop.jpg"
import EStopImage from "../../components/individualProductPage/images/mini-hd-option3-e-stop.jpg"
import FreezerImage from "../../components/individualProductPage/images/mini-hd-option3-freezer-package.jpg"
import HandBrakesImage from "../../components/individualProductPage/images/mini-hd-option3-manual-hand-brakes.jpg"
import MicronFilterImage from "../../components/individualProductPage/images/mini-hd-option3-02-micron-filter.jpg"
import MetalLidImage from "../../components/individualProductPage/images/mini-hd-option3-metal-lid.jpg"
import HandGuardImage from "../../components/individualProductPage/images/mini-hd-option3-hand-gaurds.jpg"
import CylOptionSecImage from "../../components/individualProductPage/images/mini-hd-option3-stainless-steel-cylindrical-deck.jpg"
import HopperOnlyImage from "../../components/individualProductPage/images/mini-hd-option3-stainless-hopper-only.jpg"
import UndercoatImage from "../../components/individualProductPage/images/mini-hd-option3-stainless-steel-frame-with-undercoat.jpg"
import TouchScreenImage from "../../components/individualProductPage/images/mini-hd-option3-touch-screen.jpg"
import HoseExtImage from "../../components/individualProductPage/images/mini-hd-option3-20-foot-hose-extension.jpg"
import LockOutsImage from "../../components/individualProductPage/images/mini-hd-option3-manager-lockouts.jpg"
import AutoSqueegeeLiftImage from "../../components/individualProductPage/images/mini-hd-option3-auto-squeegee-lift.jpg"
import GreyDriveTireImage from "../../components/individualProductPage/images/mini-hd-option3-grey-drive-tire.jpg"
import CastersImage from "../../components/individualProductPage/images/mini-hd-option3-casters-soft-grey.jpg"
import OilResistantHoseImage from "../../components/individualProductPage/images/mini-hd-oil-resistant-heavy-duty-hoses.jpg"
import DeleteChargerImage from "../../components/individualProductPage/images/mini-hd-option3-delete-standard-charger.jpg"
import O3Image from "../../components/individualProductPage/images/mini-hd-option3-o3-plus.jpg"
import Zero3Image from "../../components/individualProductPage/images/mini-hd-zero-3.jpg"
import Zero3SudsImage from "../../components/individualProductPage/images/mini-hd-suds-option.jpg"
import SanitationImage from "../../components/individualProductPage/images/mini-hd-option3-sanitation.jpg"
import ShroudImage from "../../components/individualProductPage/images/mini-hd-option3-removable-shroud.jpg"
import SprayJetImage from "../../components/individualProductPage/images/mini-hd-option3-spray-jet.jpg"

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

const GTRProductPage = props => {
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
          <MediaTile title="Images" subTitle="Walk Behind Floor Scrubbers" />
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
          size='52" x 22" x 40'
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
        <OptionsSelect
          image1={BatteryWetImage}
          title1="Battery - Lead Acid (WET)"
          description1="The most economic battery on the market, tried and true. With proper maintenance the battery will perform as needed without fail."
          image2={BatteryAgmImage}
          title2="Battery - Maintenance Free (AGM)"
          description2="Spill proof, charge faster, no maintenance required. Simply plug and play.*Requires universal charger."
          image3={OnboardChargerImage}
          title3="Onboard Charger"
          description3="Onboard Universal charger for AGM battery setup."
          image4={DeleteChargerImage}
          title4="Delete Standard Charger"
          description4="Export Machines have the option to remove the charger."
          image5={SinglePointFillImage}
          title5="Single Point Watering System"
          description5="Ensure proper Electrolyte levels with this system that connects all batteries to each other with hoses."
          image6={O3Image}
          title6="O3 + Package"
          description6="Seamlessly switch between chemical and Chemical free ZerO3 with just the flip of a switch. We provide a sample of chemical as well as the proper squeegee blades for the ZerO3 system."
          image7={Zero3Image}
          title7="ZerO3 Onboard Aqueous"
          description7="Replace your All-Purpose floor cleaners with one of Earth's powerful oxidizers- Aqueous Ozone. Easy to utilize in your daily cleaning regiment. Fill your machine with water straight from the tap and enjoy easy cleaning on the spot."
          image8={Zero3SudsImage}
          title8="Suds Onboard Chemical Dilution"
          description8="Add chemical to your machine without the need of pre diluting mixtures and measuring ratios. Drop in the suds reservoir, set ratio, and clean."
          image9={SanitationImage}
          title9="Sanitation Package"
          description9="Make unlimited amounts of oxidizing solution with the Sanitation Package. Clean with chemical, clean with Aqueous Ozone, use the spray wand for hard to reach places and never worry about a moldy recovery tank due to the Antimicrobial molded plastic."
          image10={GreenTankImage}
          title10="Green Antimicrobial Tanks"
          description10="Molded with Antimicrobial Plastic pellets to inhibit mold growth on tank exterior and interior."
          image11={SprayWandLessImage}
          title11="3 gal remote Tanks & Spray Wand"
          description11="The Spray Wand Tank makes it easier than ever to clean hard to reach places. The 100-PSI handheld Spray Wand ensures desks, chairs, office supplies, doors, fridges, and other surfaces are affectively cleaned."
          image12={MicronFilterImage}
          title12="Vacuum Filter 0.2 Micron"
          description12="0.2 microns is the most difficult particle size to capture. All particles larger or smaller than 0.2 microns will be captured at an equal or greater efficiency than 0.2 microns."
          image13={SprayJetImage}
          title13="Spray Jet - 45 psi / 3gpm"
          description13="Hand held spray wand with light duty 45 psi."
          image14={SprayJetImage}
          title14="Spray Wand - 100 psi / 1.5gpm"
          description14="Hand held spray wand with heavy duty 100 psi."
          image15={VacuumWandImage}
          title15="Vacuum Wand"
          description15="Remote hand held vacuum wand for spot cleaning."
          image16={VacuumWandFlipImage}
          title16="Vac/Brush Flip Wand w/ Spray Jet"
          description16="Spray down the floor, brush, and suck up the moisture with this all in one remote wand."
          image17={ShroudImage}
          title17='Scrub Deck Shrouds 26"'
          description17="Replaces the jaws with an easily removable shroud."
          image18={ShroudImage}
          title18='Scrub Deck Shrouds 28"'
          description18="Replaces the jaws with an easily removable shroud."
          image19={CastersImage}
          title19="Casters, Rear, Non-Marking"
          description19="Strong tires don't have to mark up the ground, these are no exception."
          image20={GreyDriveTireImage}
          title20="Tires, Drive, Non-Marking"
          description20="Leave no trace with these soft grey non-marking tires."
          image21={GreyTiresImage}
          title21="Tires, Drive, Pneumatic, Grey"
          description21="Keep rolling smoothly with these pneumatic grey tires."
          image22={BlackTiresImage}
          title22="Tires, Drive, Pneumatic, Black"
          description22="Keep rolling smoothly with these pneumatic black tires."
          image23={AutoSqueegeeLiftImage}
          title23="Auto Squeegee Lift"
          description23="Vac switch engages both the vac motor and the squeegee lift assembly in tandem."
          image24={TapeSwitchDriveImage}
          title24="Tape Switch Drive"
          description24="A machined aluminum handle with switch handles for easy forward movement."
          image25={EStopImage}
          title25="Switch, E-Stop"
          description25="A switch to immediately stop the machine and end all activity."
          image26={LockOutsImage}
          title26="Managers Lockout Control"
          description26="Set the preferred solution flow and brush pressure then lock them up into position with the manager lockout key."
          image27={TouchScreenImage}
          title27="Touch Screen System"
          description27="Swap out the toggle switches for a touch screen that does it all. Set up pre configured modes for cleaning and easily switch between them with the touch of a button."
          image28={FreezerImage}
          title28="Freezer Package"
          description28="A heater is added to the enclosed control panel with a fan to ensure no components lock up in cold conditions."
          image29={HandBrakesImage}
          title29="Parking Brake, Dual, Manual"
          description29="Two manually activated levers lock the wheels in place to maintain machine position."
          image30={OilResistantHoseImage}
          title30="Oil Resistant Heavy Duty Hoses"
          description30="These hoses are suitable for the suction and discharge of black fuel oils, gas and other oils with a low aromatic content, kerosene, paraffin, diesel oil, nepheline oil, mineral-based hydraulic oils, greases and tall oils."
          image31={HoseExtImage}
          title31="Drain Hose Extension 20' "
          description31="Extend the reach on your machine drain hose with this option."
          // image32={MicronFilterImage}
          // title32="Vacuum Filter 0.2 Micron"
          // description32="0.2 microns is the most difficult particle size to capture. All particles larger or smaller than 0.2 microns will be captured at an equal or greater efficiency than 0.2 microns."
          image32={MetalLidImage}
          title32="Metal Recovery Lid for XL Tank"
          description32="Heavy duty stainless steel lid. "
          image33={HandGuardImage}
          title33="Hand Guards"
          description33="Ensure operator hands are protected with these all metal hand guards."
          image34={CylOptionSecImage}
          title34="Stainless Steel Cylindrical Deck"
          description34="Stylish stainless metal prolongs the life of any deck by guarding against moisture and chemical. Our stainless design gives you a finished look from all angles. Since these are 100% stainless they will last a lifetime."
          image35={HopperOnlyImage}
          title35="Stainless Steel Hopper Only"
          description35="Extend the longevity of your hopper with this all stainless option."
          image36={UndercoatImage}
          title36="Stainless Frame & Undercoated"
          description36="Stylish stainless metal prolongs the life of any deck by guarding against moisture and chemical. Our stainless design gives you a finished look from all angles. Since these are 100% stainless they will last a lifetime."
        />
        <div id="demo-form"></div>
        <SectionTitle title="Request a Demo" />

        <RequestDemoForm />
      </Layout>
    </>
  )
}

export default GTRProductPage
