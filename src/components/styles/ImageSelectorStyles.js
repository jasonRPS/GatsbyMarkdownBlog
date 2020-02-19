import styled from "styled-components"

export const ImageSelectorStyles = styled.div`
  #container {
    display: flex;
  }

  .thumbnail-data {
    margin: 10px 0;
    width: 80px;
    height: 80px;
    border: 1px solid black;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .large-image {
    img {
      margin: 0 8rem;
      width: auto;
      height: 380px;
    }
  }

  p {
    &:hover {
      cursor: pointer;
    }
  }
`
