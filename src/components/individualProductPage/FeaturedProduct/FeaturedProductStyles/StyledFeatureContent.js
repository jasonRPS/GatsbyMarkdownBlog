import styled from "styled-components"

export const StyledFeatureContent = styled.div`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    width: 700px;
  }
  .title-container {
    display: flex;
    @media (max-width: 1440px) {
      display: block;
    }
    @media (max-width: 1200px) {
      display: none;
    }

    h1 {
      margin: 0 20px 0 0;
    }
  }
  p {
    @media (max-width: 1030px) {
      display: none;
    }
  }

  .download-share {
    @media (max-width: 900px) {
      display: none;
    }
  }

  h2 {
    margin: 0;
    @media (max-width: 380px) {
      text-align: center;
    }
  }

  .deck-container {
    display: flex;
    @media (max-width: 380px) {
      justify-content: space-around;
    }

    .deck-image-container {
      width: 150px;
      height: 150px;
      margin-top: 1rem;
      margin-right: 2rem;
      cursor: pointer;
      @media (max-width: 380px) {
        margin-top: 10px;
      }

      img {
        width: 180px;
        @media (max-width: 380px) {
          width: 130px;
        }
      }
    }
  }
`
