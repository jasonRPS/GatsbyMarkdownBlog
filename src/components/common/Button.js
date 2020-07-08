import styled from "styled-components"

export const Button = styled.button`
  background-color: #ed2024;
  color: white;
  font-family: "Titillium Web", sans-serif;
  cursor: pointer;
  border: none;
  font-size: 1em;
  /* padding: 0 0.5rem; */
  /* text-align: center; */
  ${props => (props.block ? "display: block; width: 100%;" : "")}
`
