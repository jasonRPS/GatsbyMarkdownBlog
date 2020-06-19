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

    @media (max-width: 520px) {
      height: 850px;
    }
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
      margin-top: 4.5rem;
      width: 100%;
      display: grid;
      grid-template-columns: 20% 20% 20% 20% 20%;
      justify-items: center;

      @media (max-width: 880px) {
        grid-template-columns: 33.3% 33.3% 33.3%;
        margin-top: 2.5rem;
      }
      @media (max-width: 520px) {
        grid-template-columns: 50% 50%;
      }

      img {
        width: 200px;
        @media (max-width: 1030px) {
          width: 150px;
        }
        @media (max-width: 880px) {
          width: 120px;
        }
        @media (max-width: 520px) {
          width: 100px;
        }
      }
    }
  }

  .machine-selection {
    text-align: center;
    font-size: 1em;

    p {
      padding: 0.5rem;
      text-align: center;
    }

    &:hover p {
      background-color: red;
      color: white;
    }

    @media (max-width: 520px) {
      width: 85px;
    }
  }
`
