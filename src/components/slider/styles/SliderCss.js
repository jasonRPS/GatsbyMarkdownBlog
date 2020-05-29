import styled from "styled-components"

export const SliderCss = styled.div`
  /* position: relative; */
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
    bottom: 250px;
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
