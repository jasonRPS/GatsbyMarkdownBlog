import styled from "styled-components"

export const SliderCss = styled.div`
  #slider-container {
    position: relative;
    background: black;
    width: 100%;
    height: 70vh;
    /* overflow: hidden; */

    .card {
      position: absolute;
      width: 100%;
      height: 70vh;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .slide-text {
        position: absolute;
        top: 100px;
        right: 15%;
        width: 550px;
        height: 250px;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
        text-align: center;

        @media (max-width: 770px) {
          top: 30px;
          width: 100%;
          height: 200px;
          right: 0;
        }

        p {
          color: white;
          padding: 1rem;
          text-align: center;
          font-size: large;
          margin: 0;

          @media (max-width: 770px) {
            font-size: small;
          }
        }

        button {
          border: none;
          color: white;
          padding: 0.8rem;
          font-size: 0.8em;
          text-align: center;
          background-color: #ed2024;
          margin: 0;
        }
      }
    }
  }

  #slider-nav-container {
    display: flex;
    position: absolute;
    bottom: 35%;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    height: 100px;
    /* background-color: black; */
    z-index: 2;

    @media (max-width: 860px) {
      width: 730px;
      margin-left: -365px;
    }
    @media (max-width: 740px) {
      width: 360px;
      bottom: 27%;
      margin-left: -180px;
      justify-content: center;
      align-items: center;
    }

    .slider-nav-elm {
      width: 200px;
      border: 1px solid black;
      background-color: rgba(0, 0, 0, 0.7);

      p {
        color: white;
        text-align: center;
        padding: 0.3rem;

        @media (max-width: 740px) {
          display: none;
        }
      }

      &:hover {
        background-color: rgba(237, 32, 36, 0.7);
        cursor: pointer;
      }

      @media (max-width: 860px) {
        width: 180px;
      }

      @media (max-width: 740px) {
        width: 40px;
        height: 40px;
        margin: 0 0.5rem;
        border-radius: 50%;
      }
    }

    .active {
      width: 200px;
      border: 1px solid black;
      background-color: rgba(237, 32, 36, 0.7);

      p {
        color: white;
        text-align: center;
        padding: 0.3rem;

        @media (max-width: 740px) {
          display: none;
        }
      }

      @media (max-width: 860px) {
        width: 180px;
      }

      @media (max-width: 740px) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }

  .card-selector {
    width: 100px;
    height: 80px;
    background: black;
  }

  .gallery {
    display: flex;
    overflow: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }

  .slide-container {
    position: relative;
    width: 100vw;
    height: 70vh;

    img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide-info {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1.5rem;
    width: 450px;
    text-align: center;
    color: white;
    top: 100px;
    right: 200px;

    @media (max-width: 1060px) {
      width: 300px;
      top: 50px;
      right: 100px;
    }

    @media (max-width: 600px) {
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      padding: 1rem 0;
      /* left: 0; */
      /* padding-right: 5rem; */
    }

    button {
      border: none;
      background-color: #ed2024;
      font-size: 1em;
      color: white;
      padding: 0.5rem 1rem;
    }
  }

  #slider-nav {
    display: flex;
    position: absolute;
    left: 50%;
    margin-left: -400px;
    bottom: 350px;
    z-index: 2;

    .nav-elm {
      width: 150px;
      text-align: center;
      text-decoration: none;
      margin: auto;
      width: 178px;
      height: 90px;
      display: table;
      border: 1px solid black;
      padding: 0 10px;
      color: white;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.8);

      &:hover {
        background-color: rgba(237, 32, 36, 0.7);
      }

      &:focus {
        background-color: rgba(237, 32, 36, 0.7);
      }
    }

    .nav-elm-focused {
      background-color: rgba(237, 32, 36, 0.7);
    }

    a {
      text-decoration: none;
    }
  }

  /* Javascript Classes */

  .nav-focused {
    background-color: rgba(237, 32, 36, 0.7);
  }
  .nav-not-focused {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
