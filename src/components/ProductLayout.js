import React from "react"
import styled from "styled-components"

const ProductLayoutStyled = styled.div`
  .container {
    display: flex;
    width: 500px;
    margin: 2rem;
    @media (max-width: 1420px) {
      width: 400px;
      margin: 2rem 0;
    }

    @media (max-width: 900px) {
      width: 350px;
      margin: 2rem 0;
    }

    @media (max-width: 700px) {
      width: 350px;
      margin: 2rem 0;
    }

    img {
      width: 170px;
      margin: 0.5rem;
      @media (max-width: 900px) {
        width: 100px;
      }
    }

    h3 {
      margin: 0;
    }

    button {
      background: #ed2024;
      border: none;
      padding: 0.5rem;
      color: white;
      margin: 0.5rem;
    }
  }
`

const ProductLayout = props => {
  return (
    <ProductLayoutStyled>
      <div className="container">
        <div className="img-container">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="text-container">
          <h3>{props.title}</h3>
          <a
            style={{
              color: "orange",
              textDecoration: "none",
              fontSize: ".8em",
            }}
            href="#"
          >
            {props.link} <i className="fas fa-download"></i>
          </a>
          <p>{props.content}</p>
          <button>Learn More</button>
        </div>
      </div>
    </ProductLayoutStyled>
  )
}

export default ProductLayout
