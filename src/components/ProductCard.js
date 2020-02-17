import React from "react"
import styled from "styled-components"

const ProductCardStyles = styled.div`
  #product-container {
    position: relative;
    width: 250px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 300px;

    .product-footer {
      width: 100%;
      height: 80px;
      position: absolute;
      bottom: 0;
      background-color: gray;
    }
  }
`

const ProductCard = props => {
  return (
    <ProductCardStyles>
      <div id="product-container">
        <div className="product-image">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="product-footer"> Here is the stuff</div>
      </div>
    </ProductCardStyles>
  )
}

export default ProductCard
