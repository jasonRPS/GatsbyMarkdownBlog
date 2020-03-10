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

  #thumbnails {
    width: 450px;
  }

  #thumbnail-image-container {
    display: flex;
    justify-content: space-evenly;
  }

  .thumbnail-link {
    position: relative;
    width: 150px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
    transition-duration: 0.5s;
    margin: 2rem;

    &:hover > p {
      background-color: rgba(237, 32, 36, 0.8);
    }

    p {
      position: absolute;
      text-align: center;
      font-weight: bold;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      margin: 0;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;

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
