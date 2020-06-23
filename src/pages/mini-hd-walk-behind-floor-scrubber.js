import React, { useState } from "react"
import Layout from "../components/Layout"
import MainProduct from "../components/individualProductPage/MainProduct"
import PageSubNav from "../components/individualProductPage/PageSubNav"
import Features from "../components/individualProductPage/Features"

import MiniCHDImage1 from "../images/mini-hd-25c_0000_mini-hd-25c-1.5.png"
import MiniCHDImage2 from "../images/mini-hd-25c_0001_mini-hd-25c-1.6.png"
import MiniCHDImage3 from "../images/mini-hd-25c_0002_mini-hd-25c-1.7.png"
import MiniCHDImage4 from "../images/mini-hd-25c_0003_mini-hd-25c-1.8.png"
import MiniCHDImage5 from "../images/mini-hd-25c_0004_mini-hd-25c-1.9.png"
import MiniHDDImage1 from "../images/mini-hd-26d-1.png"
import MiniHDDImage2 from "../images/mini-hd-26d-2.png"
import MiniHDDImage3 from "../images/mini-hd-26d-3.png"
import MiniHDDImage4 from "../images/mini-hd-26d-4.png"
import MiniHDDImage5 from "../images/mini-hd-26d-5.png"

import ProfileImage from "../components/individualProductPage/images/mini-hd-25c-cylindrical-profile.56.png"

const MiniHDProductPage = () => {
  const [galleryImages, setGalleryImages] = useState({
    mainImage: MiniCHDImage1,
    thumb1: MiniCHDImage1,
    thumb2: MiniCHDImage2,
    thumb3: MiniCHDImage3,
    thumb4: MiniCHDImage4,
    thumb5: MiniCHDImage5,
  })

  function setDiskImages() {
    setGalleryImages({
      mainImage: MiniHDDImage1,
      thumb1: MiniHDDImage1,
      thumb2: MiniHDDImage2,
      thumb3: MiniHDDImage3,
      thumb4: MiniHDDImage4,
      thumb5: MiniHDDImage5,
    })
  }

  function setCylImages() {
    setGalleryImages({
      mainImage: MiniCHDImage2,
      thumb1: MiniCHDImage2,
      thumb2: MiniCHDImage3,
      thumb3: MiniCHDImage4,
      thumb4: MiniCHDImage5,
      thumb5: MiniCHDImage1,
    })
  }

  function setMainImage(e) {
    setGalleryImages({
      mainImage: e.target.src,
      thumb1: galleryImages.thumb1,
      thumb2: galleryImages.thumb2,
      thumb3: galleryImages.thumb3,
      thumb4: galleryImages.thumb4,
      thumb5: galleryImages.thumb5,
    })
  }
  return (
    <Layout>
      <MainProduct
        setMainImage={setMainImage}
        setCylImages={setCylImages}
        setDiskImages={setDiskImages}
        mainImage={galleryImages.mainImage}
        thumb1={galleryImages.thumb1}
        thumb2={galleryImages.thumb2}
        thumb3={galleryImages.thumb3}
        thumb4={galleryImages.thumb4}
        thumb5={galleryImages.thumb5}
        title="Mini-HD Walk Behind Floor Scrubber"
        textContent="Reduce the cost to clean with the Mini-HD Floor Scrubber. We’ve made consistent cleaning and being budget conscious our top priorities while delivering a durable floor scrubber that will last for years. Maintain cleanliness in Warehouses, Fitness Facilities, Fabrication Shops, and other applications. The scrub brushes are installed and removed without tools to allow ease when switching between application’s needs. The squeegee blades can be rotated or flipped without tools. Ensure complete cleaning in a variety of sized applications with a reliable scrubber."
      />
      <PageSubNav />
      <Features
        profileImage={ProfileImage}
        profileAlt="Mini-HD-Walk-Behind-Floor-Scrubber"
      />
    </Layout>
  )
}

export default MiniHDProductPage
