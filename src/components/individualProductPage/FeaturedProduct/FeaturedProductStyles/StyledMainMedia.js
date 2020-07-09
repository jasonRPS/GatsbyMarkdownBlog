import styled from "styled-components"

export const StyledMainMedia = styled.div`
  .main-media-container {
    width: 500px;
    height: 500px;
    /* border: 2px solid black; */
    margin: 0 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    iframe {
      width: 500px;
      height: 280px;
      padding-top: 5rem;

      @media (max-width: 1030px) {
        width: 350px;
        height: 200px;
        padding: 2rem;
      }
      @media (max-width: 900px) {
        width: 450px;
        height: 250px;
        padding: 70px 0 0 20px;
        /* padding-top: 50px; */
      }
    }

    @media (max-width: 1030px) {
      width: 350px;
      height: 350px;
      margin: 0;
    }
    @media (max-width: 900px) {
      width: 450px;
      height: 450px;
      margin: 0;
    }
  }
`
