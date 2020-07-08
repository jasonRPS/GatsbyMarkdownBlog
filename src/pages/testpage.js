import React from "react"
import FeaturedProduct from "../components/individualProductPage/FeaturedProduct"
import Layout from "../components/Layout"

//Thumbnail Images
import CylindricalThumb1Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb1.jpg"
import CylindricalThumb2Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb2.jpg"
import CylindricalThumb3Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb3.jpg"
import CylindricalThumb4Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb4.jpg"
import CylindricalThumb5Image from "../components/individualProductPage/images/mini-hd-cylindrical-thumb5.jpg"
//End Thumbnail Images

//Main Images
import CylindricalMain1Image from "../components/individualProductPage/images/mini-hd-cylindrical-main1.jpg"
import CylindricalMain2Image from "../components/individualProductPage/images/mini-hd-cylindrical-main2.jpg"
import CylindricalMain3Image from "../components/individualProductPage/images/mini-hd-cylindrical-main3.jpg"
import CylindricalMain4Image from "../components/individualProductPage/images/mini-hd-cylindrical-main4.jpg"
import CylindricalMain5Image from "../components/individualProductPage/images/mini-hd-cylindrical-main5.jpg"
//End Main Images

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
        />
      </Layout>
    </>
  )
}

export default TestPage
