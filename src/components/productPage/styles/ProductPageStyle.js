import styled from "styled-components"

export const ProductPageStyles = styled.div`
  background: whitesmoke;
  #scroll-description {
    width: 100%;
    height: 50px;
    background-color: black;
  }
  #product-details-nav {
    width: 100%;
    height: 40px;
    background-color: black;

    ul {
      width: 100%;
      height: 100%;
      list-style-type: none;
      display: flex;
      color: white;
      justify-content: space-evenly;

      margin: 0;
      padding: 0;

      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        display: -ms-flexbox;
        width: 1200px;
        margin: 0 auto;
      }

      @supports (-ms-ime-align: auto) {
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
      li {
        align-self: center;
        font-size: 1.2em;
        margin: 0;
        /* padding: 0; */
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
          margin: 0 3rem;
        }

        @supports (-ms-ime-align: auto) {
          margin: 0 3rem;
        }
      }
    }
  }
  .unselected-link {
    position: relative;
    /* background-color: red; */
    width: 160px;
    padding: 0.4rem;
    text-align: center;
  }
  .selected-link {
    position: relative;
    background-color: red;
    width: 160px;
    padding: 0.45rem;
    text-align: center;
    /* border-bottom: 10px solid green;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent; */
  }

  .selected-link:before {
    border-bottom: 10px solid red;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: "";
    height: 0;
    left: 0;
    margin-left: 20%;
    position: absolute;
    bottom: -10px;
    width: 0;
    transform: rotate(180deg);
  }
`
