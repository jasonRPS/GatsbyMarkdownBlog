import styled from "styled-components"

export const YouBeTheJudgeStyles = styled.div`
  #judge-container {
    position: absolute;
    top: 100px;
    width: 70%;
    left: 50%;
    margin-left: -35%;
    height: 80vh;
    background-color: white;
    z-index: 5;
    border: 1px solid black;
    box-shadow: 10px 10px 10px black;
  }

  #judge-content {
    /* border: 4px solid blue; */
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 10px;
  }

  #x-close {
    position: absolute;
    font-size: 2em;
    right: 20px;
    top: 20px;
    z-index: 2;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }

  .ybtj-title {
    width: 400px;
    position: absolute;
    background-color: red;
    top: 0;
    left: 50%;
    margin-left: -200px;
    padding: 0.2rem;
    text-align: center;
    color: white;
  }

  .thumbnail-layout {
    /* position: absolute; */
    display: grid;
    grid-template-rows: auto;
    margin-left: 20px;
    width: 300px;
    height: 100%;
    /* border: 3px solid red; */
    /* height: 300px; */
  }

  .thumbnail-container {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  .thumbnail {
    width: 80px;
    height: 80px;
    border: 2px solid black;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .thumbnail-label {
    text-align: center;
    background-color: lightgrey;
    color: white;
    width: 150px;

    p {
      padding: 0.3rem;
      margin: 0;
    }
  }

  .tank-position {
    /* position: absolute; */
    /* top: 15%;
    left: 25%; */
    margin-top: 100px;
    margin-left: 30px;
    /* border: 3px solid green; */
  }

  .ybtj-widget-position {
    margin-top: 100px;
    margin-left: 50px;
  }
  /* .thumbnail-container {
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    left: 20px;

    .thumbnail {
      width: 80px;
      height: 80px;
      border: 1px solid black;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  } */
`
