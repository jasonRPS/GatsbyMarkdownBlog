import React from "react"
import styled from "styled-components"

const SpecsStyles = styled.div`
  #product-spec-container {
    width: 80%;
    margin: 0 auto;
    background-color: white;
  }

  .download-links {
    color: #ed2024;
    ul {
      list-style-type: none;
      display: flex;

      li {
        margin: 0.8rem 1rem;
      }
    }
  }

  .product-spec-body {
    padding: 0 3rem;
  }
`

const SpecsSection = () => {
  return (
    <SpecsStyles>
      <div id="product-spec-container">
        <div className="download-links">
          <ul>
            <li>
              <i className="fas fa-download"></i> Download Brochure{" "}
            </li>
            <li>
              <i className="fas fa-download"></i> Download Technical
              Specifications{" "}
            </li>
            <li>
              <i className="fas fa-download"></i> Download Parts Manual{" "}
            </li>
            <li>
              <i className="fas fa-download"></i> Download Operator Manual
            </li>
          </ul>
        </div>
        <div className="product-spec-body">
          <h3>Product Specifications</h3>
          <div id="product-specs"></div>
        </div>
      </div>
    </SpecsStyles>
  )
}

export default SpecsSection
