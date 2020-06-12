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
      height: 850px;
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
  }

  img {
    position: absolute;
    right: 350px;
    top: 50px;
    width: 300px;
  }

  h1 {
    position: absolute;
    bottom: 20px;
    text-align: center;
    margin: 0;
    padding: 2rem;
    color: #4c5155;
    font-family: "Anton", sans-serif;
    font-size: 3em;
  }
`
