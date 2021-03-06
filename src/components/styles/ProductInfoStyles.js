import styled from "styled-components"

export const ProductInfoStyles = styled.div`
  #product-container {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  #disk-selection-images {
    display: flex;
    justify-content: space-evenly;
    img {
      width: 200px;
    }

    h1 {
      font-family: "Titillium Web", sans-serif;
    }
  }
`
