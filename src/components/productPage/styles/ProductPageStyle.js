import styled from "styled-components"

export const ProductPageStyles = styled.div`
  background: whitesmoke;
  padding-bottom: 2rem;
  #scroll-description {
    position: fixed;
    top: 60px;
    width: 100%;
    height: 50px;
    padding: 0.5rem;
    background-color: black;
    z-index: 3;

    #scroll-description-data {
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 3;

      button {
        color: white;
        border: none;
        background-color: red;
        padding: 0.5rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  #product-details-nav {
    position: sticky;
    top: 125px;
    width: 100%;
    height: 40px;
    z-index: 3;
    background-color: black;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      position: fixed;
      top: 60px;
    }

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
        width: 800px;
        margin: 0 auto;
      }

      @supports (-ms-ime-align: auto) {
        width: 800px;
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

        &:hover {
          cursor: pointer;
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
    transition-duration: 0.4s;
  }
  .selected-link {
    position: relative;
    background-color: red;
    width: 160px;
    padding: 0.45rem;
    text-align: center;
    transition-duration: 0.4s;
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
    transition-duration: 0.4s;
  }

  #scroll-up-arrow {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 4em;
    z-index: 100;
    color: red;
    transition-duration: 0.2s;

    &:hover {
      cursor: pointer;
    }
  }
`
