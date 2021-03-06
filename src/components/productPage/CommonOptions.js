import React from "react"
import styled, { withTheme } from "styled-components"

const CommonOptionsStyles = styled.div`
  #container {
    display: flex;
    align-items: center;
    margin: 2rem 0;

    &:hover {
      cursor: pointer;
    }
  }

  &:hover #container i {
    color: red;
  }

  .img-container {
    position: relative;
    border-radius: 50%;
    border: 2px solid black;
    width: 150px;
    height: 150px;
    overflow: hidden;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    i {
      position: absolute;
      z-index: 3;
      font-size: 3em;
      top: 50%;
      left: 50%;
      margin-top: -16%;
      margin-left: -16%;
      color: white;
      transition-duration: 0.3s;
    }
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 150px;
    height: 150px;
  }

  .content-container {
    background-color: rgba(0, 0, 0, 0.5);
    height: 40px;
    width: 350px;
    padding: 0.4rem 1.5rem;
    color: white;
    margin-left: -20px;
    z-index: 1;
  }
`

const CommonOptions = props => {
  return (
    <CommonOptionsStyles>
      <div id="container">
        <div className="img-container">
          <div className="overlay"></div>
          <img src={props.optionImage} alt="" />
          <i className="far fa-play-circle"></i>
        </div>
        <div className="content-container">
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              zIndex: "150",
              color: "white",
            }}
          >
            {props.optionsTitle}
          </span>{" "}
          - {props.optionsDescription}
        </div>
      </div>
    </CommonOptionsStyles>
  )
}

export default CommonOptions
