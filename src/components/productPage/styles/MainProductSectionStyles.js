import styled from "styled-components"

export const MainProductSectionStyles = styled.div`
  #container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
    padding: 2rem;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: -ms-flexbox;
    }
  }

  #thumbnail-image-container {
    display: flex;
    justify-content: space-evenly;
  }

  .thumbnail-link {
    display: flex;
    align-items: center;

    margin: 2rem;

    p {
      text-align: center;
      margin-left: 10px;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
    }

    img {
      width: 80px;
      height: 80px;
      border: 2px solid black;
      /* width: 100%;
      height: 100%; */
      object-fit: cover;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .main-image {
    position: relative;
    width: 100%;
    height: 500px;
    /* border: 2px solid black; */
    /* margin-top: 50px; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .handMade {
      position: absolute;
      width: 20%;
      height: auto;
      top: 0;
      right: 80px;
      z-index: -1;
      img {
        width: 150px;
      }
    }
  }

  #product-details {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      width: 50%;
      margin-left: 2rem;
    }
    p {
      width: 90%;
    }

    .scrubber-thumbnails {
      display: flex;
      justify-content: start;

      .deck-link-container {
        margin-right: 5rem;
        img {
          width: 70%;
        }
        p {
          text-align: center;
          font-size: 1.3vw;
          margin: 0;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`
