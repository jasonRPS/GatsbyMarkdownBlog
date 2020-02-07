import styled from "styled-components"
import BackgroundImage from "../../images/fc-image5.jpg"

export const CategorySectionStyles = styled.div`
  .parallax {
    position: relative;
    background-image: url(${BackgroundImage});
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #machine-container {
    width: 100%;
    position: absolute;
    color: black;
    top: 20%;
    /* left: 50%; */
    /* margin-left: -295px; */

    h1 {
      text-align: center;
    }
    #product-container {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`
