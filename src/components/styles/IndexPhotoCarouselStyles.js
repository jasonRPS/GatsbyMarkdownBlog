import styled from "styled-components"

export const IndexPhotoCarouselStyles = styled.div`
  #photo-container {
    position: relative;
    width: 100%;
    height: 100%;

    .slide {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  #photo-selector-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 900px;
    height: 100px;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    margin-left: -450px;

    .thumb-selector {
      height: 100%;
      width: 250px;
      border: solid 0.5px black;
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      text-align: center;
      transition-duration: 0.3s;
      font-size: 1.2em;

      &:hover {
        background-color: rgba(198, 66, 71, 0.7);
        cursor: pointer;
      }
    }
  }
`
