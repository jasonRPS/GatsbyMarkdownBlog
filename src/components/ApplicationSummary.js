import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
  img {
    width: 300px;
    height: 200px;
  }

  .content {
    margin: 0 1.5rem;
    h2 {
      margin: 0;
      border-bottom: 3px solid red;
    }
    p {
    }
    button {
      color: white;
      background-color: red;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`

const ApplicationSummary = props => {
  return (
    <StyledContainer>
      <img src={props.image} alt={props.alt} />
      <div className="content">
        <h2>{props.applicationName}</h2>
        <p>{props.applicationDescription}</p>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={props.link}
        >
          <button>View More</button>
        </Link>
      </div>
    </StyledContainer>
  )
}

export default ApplicationSummary
