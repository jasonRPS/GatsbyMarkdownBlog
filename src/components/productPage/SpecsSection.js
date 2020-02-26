import React from "react"
import styled from "styled-components"

const SpecsStyles = styled.div`
  #product-spec-container {
    width: 90%;
    margin: auto;
    background-color: white;
    padding-bottom: 2rem;
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

  .spec-row {
    display: flex;
    border-top: 1px solid black;
    /* margin: 0.5rem; */
    margin-left: 1.5rem;

    /* padding: 0.3rem; */
  }
  .product-specs-cell__title {
    /* margin-left: 1.5rem; */
    min-width: 250px;
    background-color: lightgray;
    font-weight: bold;
    padding: 0.5rem 0.5rem;
  }

  .product-specs-cell {
    padding: 0.5rem 0.5rem;
    margin-right: 1.5rem;
  }

  .spec-data {
    display: flex;
    justify-content: space-around;
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
          <div className="spec-data">
            <div className="left-column">
              <div className="spec-row">
                <div className="product-specs-cell__title">Tank Material</div>
                <div className="product-specs-cell">
                  Poly (3/8" (.9525cm)think)
                </div>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Chassis Construction
                </span>
                <span className="product-specs-cell">
                  7-gauge (3/16" Steel) (.47625 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Rear Wheels
                </span>
                <span className="product-specs-cell">
                  (2) 14" x 5" (35.5 cm x 13 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Drive Wheel
                </span>
                <span className="product-specs-cell">
                  12" x 4" (30.5 cm x 10 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Size (L x W x H)
                </span>
                <span className="product-specs-cell">
                  69" x 36" x 56" (175 cm x 91 cm x 142 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Weight (w/o batteries)
                </span>
                <span className="product-specs-cell">1,230 lbs. (558 kg)</span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Weight (w/ 325ah batteries)
                </span>
                <span className="product-specs-cell">1,950 lbs. (885 kg)</span>
              </div>
            </div>

            <div className="right-column">
              <div className="spec-row">
                <div className="product-specs-cell__title">Tank Material</div>
                <div className="product-specs-cell">
                  Poly (3/8" (.9525cm)think)
                </div>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Chassis Construction
                </span>
                <span className="product-specs-cell">
                  7-gauge (3/16" Steel) (.47625 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Rear Wheels
                </span>
                <span className="product-specs-cell">
                  (2) 14" x 5" (35.5 cm x 13 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Drive Wheel
                </span>
                <span className="product-specs-cell">
                  12" x 4" (30.5 cm x 10 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Size (L x W x H)
                </span>
                <span className="product-specs-cell">
                  69" x 36" x 56" (175 cm x 91 cm x 142 cm)
                </span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Weight (w/o batteries)
                </span>
                <span className="product-specs-cell">1,230 lbs. (558 kg)</span>
              </div>

              <div className="spec-row">
                <span
                  style={{ fontWeight: "bold" }}
                  className="product-specs-cell__title"
                >
                  Weight (w/ 325ah batteries)
                </span>
                <span className="product-specs-cell">1,950 lbs. (885 kg)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpecsStyles>
  )
}

export default SpecsSection
