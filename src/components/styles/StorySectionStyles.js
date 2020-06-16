import styled from "styled-components"
import BackgroundImage from "../../images/34-bw-image.jpg"

export const StorySectionStyles = styled.div`
  .parallax {
    position: relative;
    background-image: url(${BackgroundImage});
    height: 650px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 520px) {
      height: 650px;
    }
  }

  #story-board {
    position: absolute;
    top: 40px;
    left: 250px;
    width: 450px;
    height: 400px;
    background-color: rgba(237, 32, 36, 0.5);
    z-index: 3;

    @media (max-width: 1360px) {
      left: 100px;
    }

    @media (max-width: 500px) {
      width: 350px;
      left: 50%;
      margin-left: -175px;
    }

    header {
      font-family: "Anton", sans-serif;
      /* width: 100%; */
      margin-left: 30px;
      margin-top: 20px;

      .the {
        color: white;
        margin: 0;
        font-size: 2em;
        padding-left: 1rem;

        @media (max-width: 500px) {
          font-size: 1.5rem;
        }
      }

      .factorycat {
        margin-top: -30px;
        font-size: 3em;
        padding-left: 65px;

        @media (max-width: 500px) {
          font-size: 2rem;
        }
      }

      .story {
        color: white;
        margin-top: -80px;
        font-size: 2em;
        padding-left: 18rem;
        margin-bottom: 0;

        @media (max-width: 500px) {
          font-size: 1.5rem;
          padding-left: 14rem;
          margin-top: -60px;
        }
      }
    }

    section {
      color: white;

      p {
        padding: 0 1rem;
      }
    }

    footer {
      display: flex;
      button {
        color: white;
        background-color: transparent;
        width: 150px;
        padding: 0.5rem;
        margin: 1rem;
        border: solid 1px white;
        text-align: center;
        font-size: 1em;

        &:hover {
          background: red;
          color: black;
          transition-duration: 0.3s;
          cursor: pointer;
        }
      }

      img {
        position: absolute;
        right: 40px;
        top: 280px;
        width: 100px;
        display: none;

        @media (max-width: 1360px) {
          display: block;
        }

        @media (max-width: 520px) {
          display: block;
          top: 290px;
        }
      }
    }
  }

  img {
    position: absolute;
    right: 350px;
    top: 50px;
    width: 300px;

    @media (max-width: 1360px) {
      display: none;
    }
  }

  h1 {
    position: absolute;
    left: 50%;
    width: 500px;
    margin-left: -250px;
    bottom: 20px;
    text-align: center;
    /* margin: 0; */
    padding: 2rem;
    color: #c6c7c8;
    font-family: "Anton", sans-serif;
    font-size: 3em;

    @media (max-width: 500px) {
      font-size: 30px;
      bottom: 150px;
      padding: 0;
      width: 350px;
      left: 50%;
      margin-left: -175px;
    }
  }
`
