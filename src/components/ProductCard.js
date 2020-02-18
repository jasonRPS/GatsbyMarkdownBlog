import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ProductCardStyles = styled.div`
  #product-container {
    position: relative;
    width: 250px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 350px;
    margin: 10px 10px;
    transition-duration: 0.5s;

    &:hover {
      border-color: #c64247;
      cursor: pointer;
    }

    &:hover .product-footer {
      background-color: whitesmoke;
    }

    .product-image {
      width: 100%;
      padding: 1rem;
      img {
        width: 200px;
      }
    }

    .product-header {
      position: absolute;
      bottom: 80px;
      width: 100%;
      background: #c64247;

      h4 {
        margin: 0.5rem 0;
        text-align: center;
      }
    }

    .product-footer {
      width: 100%;
      height: 80px;
      position: absolute;
      bottom: 0;
      background-color: lightgray;
      transition-duration: 0.5s;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      ul {
        list-style-type: none;
        margin: 7px 7px;
        padding: 0;

        li {
          /* border-bottom: 1px solid black; */
          margin: 4px 0;
          font-weight: bolder;
        }
      }
    }
  }
`

const ProductCard = props => {
  return (
    <ProductCardStyles>
      <Link style={{ textDecoration: "none", color: "black" }} to="mini-hd">
        <div id="product-container">
          <div className="product-image">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="product-header">
            <h4>{props.name}</h4>
          </div>
          <div className="product-footer">
            <ul>
              <li>
                Tank:{" "}
                <span style={{ fontWeight: "normal", fontSize: ".8em" }}>
                  {props.tank}
                </span>
              </li>
              <li>
                Disk Size:{" "}
                <span style={{ fontWeight: "normal", fontSize: ".8em" }}>
                  {props.size}
                </span>
              </li>
              <li>
                Run Time:{" "}
                <span style={{ fontWeight: "normal", fontSize: ".8em" }}>
                  {props.time}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </ProductCardStyles>
  )
}

export default ProductCard
