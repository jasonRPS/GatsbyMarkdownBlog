import React from "react"
import styled from "styled-components"
import Image from "./images/mini-hd-form-image.jpg"

const StyledFormContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* grid-template-columns: 60% 40%; */
  justify-content: space-around;
  /* border: 4px solid green; */

  .form-container {
    /* width: 100%; */
    /* border: 2px solid blue; */
    margin: 0 auto;

    form {
      width: 95%;
      /* border: 2px solid red; */
      margin: 0 auto;
    }

    input {
      width: 46%;
      margin: 0.5rem;
      padding: 0.5rem;
      @media (max-width: 910px) {
        width: 95%;
        margin: 0.5rem auto;
      }
    }

    textarea {
      margin: 0.5rem;
      width: 97%;
      @media (max-width: 910px) {
        width: 98%;
        margin: 0.5rem auto;
      }
    }

    button {
      margin: 0.5rem;
      padding: 0.6rem;
      background-color: red;
      color: white;
      cursor: pointer;
      border: none;
    }
  }

  .image-container {
    /* border: 2px solid blue; */
    width: 450px;
    height: 450px;
    @media (max-width: 1200px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  /* img {
    width: 100%;
    height: auto;
  } */
`

const RequestDemoForm = () => {
  return (
    <>
      <StyledFormContainer>
        <div className="form-container">
          <p style={{ textAlign: "center" }}>
            To schedule a free product demonstration, please fill out the form
            below and a local sales representative will contact you shortly.
          </p>
          <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Company Name"></input>
            <input type="text" placeholder="Work Email"></input>
            <input type="text" placeholder="Postal Code"></input>
            <input type="text" placeholder="Industry"></input>
            <input type="text" placeholder="Phone"></input>
            <input type="text" placeholder="Country"></input>
            <br />
            <textarea placeholder="Comments"></textarea>
            <br />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div className="image-container">
          <img src={Image} />
        </div>
      </StyledFormContainer>
    </>
  )
}

export default RequestDemoForm
