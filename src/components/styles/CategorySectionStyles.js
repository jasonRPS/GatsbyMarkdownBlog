import styled from "styled-components"
import BackgroundImage from "../../images/GTXRidingScrubberBlured.jpg"

export const CategorySectionStyles = styled.div`
  .parallax {
    position: relative;
    background-image: url(${BackgroundImage});
    height: 560px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1 {
    text-align: center;
    margin: 0;
    padding: 2rem;
    color: #4c5155;
    font-family: "Anton", sans-serif;
    font-size: 3em;

    @media (max-width: 880px) {
      font-size: 2.5em;
    }
    @media (max-width: 435px) {
      font-size: 2em;
    }

    span {
      font-size: 1.3em;
    }
  }

  #machine-container {
    width: 100%;
    position: absolute;
    color: black;
    top: 20%;
    /* left: 50%; */
    /* margin-left: -295px; */

    #product-container {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      img {
        max-width: 100%;
        width: auto;
        height: auto;
      }
    }
  }

  .machine-selection {
    text-align: center;
    font-size: 1.3em;
  }

  .machine-selection + p {
    background-color: red;
  }
`
