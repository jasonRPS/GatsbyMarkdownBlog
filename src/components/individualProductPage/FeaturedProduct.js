import React, { useState } from "react"
import { StyledFeaturedProducts } from "./FeaturedProduct/FeaturedProductStyles"
import ImageCarousel from "./FeaturedProduct/ImageCarousel"
import FeaturedContent from "./FeaturedProduct/FeaturedContent"

const FeaturedProduct = props => {
  const [thumbnail, setThumbnail] = useState({
    thumb1: props.cylindricalThumb1,
    thumb2: props.cylindricalThumb2,
    thumb3: props.cylindricalThumb3,
    thumb4: props.cylindricalThumb4,
    thumb5: props.cylindricalThumb5,
  })

  const [mainImage, setMainImage] = useState({
    main1: props.cylindricalMain1,
    main2: props.cylindricalMain2,
    main3: props.cylindricalMain3,
    main4: props.cylindricalMain4,
    main5: props.cylindricalMain5,
  })

  const [mainImageRender, setMainImageRender] = useState(mainImage.main1)
  const [toggleMedia, setToggleMedia] = useState({
    displayImages: "block",
    displayVideo: "none",
  })

  function handleClick(e) {
    setMainImageRender(e.target.dataset.main)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
  }

  function handleVideoToggle() {
    if (toggleMedia.displayVideo === "none") {
      setToggleMedia({
        displayImages: "none",
        displayVideo: "block",
      })
    }
  }

  function cylindricalSelect() {
    setMainImageRender(props.cylindricalMain1)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
    setThumbnail({
      thumb1: props.cylindricalThumb1,
      thumb2: props.cylindricalThumb2,
      thumb3: props.cylindricalThumb3,
      thumb4: props.cylindricalThumb4,
      thumb5: props.cylindricalThumb5,
    })
    setMainImage({
      main1: props.cylindricalMain1,
      main2: props.cylindricalMain2,
      main3: props.cylindricalMain3,
      main4: props.cylindricalMain4,
      main5: props.cylindricalMain5,
    })
  }

  function diskSelect() {
    setMainImageRender(props.diskMain1)
    setToggleMedia({
      displayImages: "block",
      displayVideo: "none",
    })
    setThumbnail({
      thumb1: props.diskThumb1,
      thumb2: props.diskThumb2,
      thumb3: props.diskThumb3,
      thumb4: props.diskThumb4,
      thumb5: props.diskThumb5,
    })
    setMainImage({
      main1: props.diskMain1,
      main2: props.diskMain2,
      main3: props.diskMain3,
      main4: props.diskMain4,
      main5: props.diskMain5,
    })
  }

  return (
    <StyledFeaturedProducts>
      <ImageCarousel
        cylindricalThumb1={props.cylindricalThumb1}
        cylindricalThumb2={props.cylindricalThumb2}
        cylindricalThumb3={props.cylindricalThumb3}
        cylindricalThumb4={props.cylindricalThumb4}
        cylindricalThumb5={props.cylindricalThumb5}
        cylindricalMain1={props.cylindricalMain1}
        cylindricalMain2={props.cylindricalMain2}
        cylindricalMain3={props.cylindricalMain3}
        cylindricalMain4={props.cylindricalMain4}
        cylindricalMain5={props.cylindricalMain5}
        diskThumb1={props.diskThumb1}
        diskThumb1={props.diskThumb1}
        diskThumb1={props.diskThumb1}
        diskThumb1={props.diskThumb1}
        diskThumb1={props.diskThumb1}
        diskMain1={props.diskMain1}
        diskMain2={props.diskMain2}
        diskMain3={props.diskMain3}
        diskMain4={props.diskMain4}
        diskMain5={props.diskMain5}
        thumbnail={thumbnail}
        mainImage={mainImage}
        mainImageRender={mainImageRender}
        toggleMedia={toggleMedia}
        handleClick={handleClick}
        handleVideoToggle={handleVideoToggle}
      />
      <FeaturedContent
        diskSelect={diskSelect}
        cylindricalSelect={cylindricalSelect}
      />
    </StyledFeaturedProducts>
  )
}

export default FeaturedProduct
