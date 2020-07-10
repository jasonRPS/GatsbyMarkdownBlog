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
      width: 100%;
      height: 280px;
      padding-top: 5rem;
      margin: 0 auto;

      @media (max-width: 1030px) {
        padding: 2.5rem 0 0 1rem;
        height: 190px;
      }
      @media (max-width: 930px) {
        padding: 2.5rem 0 0 0;
        height: 190px;
      }
      @media (max-width: 900px) {
        height: 250px;
        padding: 70px 0 0 20px;
      }

      @media (max-width: 650px) {
        width: 470px;
      }
      @media (max-width: 530px) {
        width: 100%;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 470px) {
        width: 400px;
        padding-left: 25px;
      }
      @media (max-width: 450px) {
        width: 400px;
        padding: 0;
      }
      @media (max-width: 420px) {
        width: 350px;
        padding: 1.3rem;
      }

      @media (max-width: 380px) {
        width: 330px;
        height: 200px;
        padding: 0;
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

    @media (max-width: 450px) {
      width: 370px;
      height: 370px;
      margin: 0;
    }

    @media (max-width: 380px) {
      width: 320px;
      height: 320px;
      margin: 0;
    }
  }
`
