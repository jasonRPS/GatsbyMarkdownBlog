import styled from "styled-components"

export const StyledThumbs = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1350px) {
    flex-direction: row;
    justify-content: center;
  }

  .thumbnail {
    width: 70px;
    height: 70px;
    border: 2px solid lightgrey;
    margin-bottom: 12px;
    cursor: pointer;

    @media (max-width: 1440px) {
      margin-right: 12px;
    }

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
