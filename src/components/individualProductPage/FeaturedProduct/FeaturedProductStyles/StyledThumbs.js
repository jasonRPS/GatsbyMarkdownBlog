import styled from "styled-components"

export const StyledThumbs = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1350px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 300px;
    margin-right: 80px;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  @media (max-width: 650px) {
    /* margin-top: 50px; */
    flex-direction: row;
    height: 100px;
    margin: 0 auto;
  }

  .thumbnail {
    width: 70px;
    height: 70px;
    border: 2px solid lightgrey;
    margin-bottom: 12px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1440px) {
      margin-right: 12px;
    }

    @media (max-width: 530px) {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 380px) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      border-color: black;
    }
  }

  i {
    color: #ff0000;
    font-size: 3.9em;
    margin-top: 2px;

    @media (max-width: 530px) {
      font-size: 2.8em;
    }
    @media (max-width: 380px) {
      font-size: 2.3em;
      margin-top: 0;
    }
  }
`
