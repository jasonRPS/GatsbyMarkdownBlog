import styled from "styled-components"

export const StyledThumbs = styled.div`
  display: flex;
  flex-direction: column;

  .thumbnail {
    width: 70px;
    height: 70px;
    border: 2px solid lightgrey;
    margin-bottom: 12px;
    cursor: pointer;

    &:hover {
      border-color: black;
    }
  }

  i {
    color: #ff0000;
    font-size: 3.9em;
    margin-top: 2px;
  }
`
