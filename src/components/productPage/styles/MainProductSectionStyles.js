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
    width: 80px;
    height: 80px;
    border: 2px solid black;
    margin: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  .main-image {
    width: 100%;
    height: 500px;
    /* border: 2px solid black; */
    /* margin-top: 50px; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
