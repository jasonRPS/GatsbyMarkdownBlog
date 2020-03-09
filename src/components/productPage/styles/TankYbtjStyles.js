import styled from "styled-components"

export const TankYbtjStyles = styled.div`
  #tank-container {
    /* position: relative; */
    /* width: 100%; */

    .tank-main-image {
      position: absolute;
      left: 30%;
      bottom: 10%;
      z-index: 2;
    }

    .tank-small-image {
      position: absolute;
      right: 20px;
      bottom: 10%;
    }
  }

  .blue-target-container-1 {
    position: absolute;
    top: 150px;
    left: 55px;
    width: 25px;
    height: 25px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    &:hover ~ .info-1 {
      /* display: block; */
      opacity: 1;
    }
  }

  .blue-target-container-2 {
    position: absolute;
    bottom: 180px;
    right: 100px;
    width: 25px;
    height: 25px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    &:hover ~ .info-2 {
      /* display: block; */
      opacity: 1;
    }
  }

  .blue-target-container-3 {
    position: absolute;
    bottom: 100px;
    left: 100px;
    width: 25px;
    height: 25px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    &:hover ~ .info-3 {
      /* display: block; */
      opacity: 1;
    }
  }

  .blue-target-container-4 {
    position: absolute;
    bottom: 80px;
    right: 120px;
    width: 25px;
    height: 25px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    &:hover ~ .info-4 {
      /* display: block; */
      opacity: 1;
    }
  }

  .blue-target-container-5 {
    position: absolute;
    bottom: 20px;
    right: 70px;
    width: 25px;
    height: 25px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    &:hover ~ .info-5 {
      /* display: block; */
      opacity: 1;
    }
  }

  .second-inner {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 15px;
    height: 15px;
    border: 2px solid blue;
    border-radius: 50%;
    z-index: 5;
    font-size: small;
    text-align: center;
    background-color: blue;
    color: white;
  }

  .info-1 {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid black;
    top: 110px;
    left: 20px;
    /* display: none; */
    opacity: 0;
    transition-duration: 0.5s;
    p {
      margin: 0;
      padding: 0.5rem;
      /* color: white; */
    }
  }

  .info-2 {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid black;
    top: 165px;
    right: -160px;
    /* display: none; */
    opacity: 0;
    transition-duration: 0.5s;
    p {
      margin: 0;
      padding: 0.5rem;
      /* color: white; */
    }
  }

  .info-3 {
    position: absolute;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid black;
    bottom: 70px;
    right: -50px;
    /* display: none; */
    opacity: 0;
    transition-duration: 0.5s;
    p {
      margin: 0;
      padding: 0.5rem;
      /* color: white; */
    }
  }

  .info-4 {
    position: absolute;
    /* width: 300px; */
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid black;
    bottom: 100px;
    right: 50px;
    /* display: none; */
    opacity: 0;
    transition-duration: 0.5s;
    p {
      margin: 0;
      padding: 0.5rem;
      /* color: white; */
    }
  }

  .info-5 {
    position: absolute;
    /* width: 300px; */
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid black;
    bottom: 20px;
    right: 120px;
    /* display: none; */
    opacity: 0;
    transition-duration: 0.5s;
    p {
      margin: 0;
      padding: 0.5rem;
      /* color: white; */
    }
  }
`
