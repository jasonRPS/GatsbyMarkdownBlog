import React from "react"
import styled from "styled-components"
import Image from "../../images/test-image-3.png"

const SelectorStyles = styled.div`
  background-color: whitesmoke;
  height: 250px;
  padding: 1rem;
  &:hover {
    color: white;
    cursor: pointer;
    background-color: darkgray;
    transition-duration: 0.6s;
    cursor: pointer;
  }

  #content {
    /* width: 80%;
    margin: auto; */
    display: grid;
    grid-template-columns: 35% auto 35%;
    align-items: center;
    &:hover {
      /* background-color: whitesmoke; */
      transition-duration: 0.5s;
    }

    img {
      width: 400px;
      justify-self: right;
    }

    #text-content {
      justify-self: center;
      h1 {
        font-size: 3em;
        font-weight: normal;
        margin: 0;
      }
      h3 {
        font-weight: normal;
        margin: 0;
      }
    }
    i {
      font-size: 3.5em;
      justify-self: left;
    }
  }
`

const ProductSelector = () => {
  return (
    <SelectorStyles>
      <div id="container">
        <div id="content">
          <img src={Image} alt="" />
          <div id="text-content">
            <h1>Product Selector</h1>
            <h3>Find your perfect machine</h3>
          </div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </SelectorStyles>
  )
}

export default ProductSelector
