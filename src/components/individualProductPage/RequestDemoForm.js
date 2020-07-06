import React from "react"
import styled from "styled-components"
import SectionTitle from "../common/SectionTitle"
import Image from "../../images/mini-hd-26d-1.png"

const StyledFormContainer = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;

  input {
    margin: 0.5rem;
    width: 400px;
    padding: 0.5rem;
  }

  textarea {
    margin: 0.5rem;
    width: 835px;
    padding: 0.5rem;
  }

  button {
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: red;
    border: none;
    color: white;
  }
`

const RequestDemoForm = () => {
  return (
    <>
      <div style={{ margin: "2rem 5rem" }}>
        <SectionTitle title="Request a Demo" />
      </div>
      <StyledFormContainer>
        <div className="form-container">
          <form>
            <p>
              To schedule a free product demonstration, please fill out the form
              below and a local sales representative will contact you shortly.
            </p>
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
          <img src={Image} width="400px" />
        </div>
      </StyledFormContainer>
    </>
  )
}

export default RequestDemoForm
