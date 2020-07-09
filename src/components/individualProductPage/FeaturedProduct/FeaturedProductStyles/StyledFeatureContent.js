import styled from "styled-components"

export const StyledFeatureContent = styled.div`
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
  }

  .deck-container {
    display: flex;

    .deck-image-container {
      width: 150px;
      height: 150px;
      margin-top: 1rem;
      margin-right: 2rem;
      cursor: pointer;
      /* @media (max-width: 900px) {
        width: 130px;
      } */

      img {
        width: 180px;
        /* @media (max-width: 900px) {
          width: 130px;
        } */
      }
    }
  }
`
