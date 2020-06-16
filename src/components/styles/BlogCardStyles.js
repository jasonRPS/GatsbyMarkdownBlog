import styled from "styled-components"

export const BlogCardStyles = styled.div`
  width: 350px;
  height: 470px;
  border: 1px solid black;
  margin: 0.5rem 3rem;

  .blog-container {
    text-align: center;
    .img-container {
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h2 {
      color: black;
      padding: 0 1rem;
      text-decoration: none;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    p {
      /* color: green; */
      margin: 0;
      font-size: 0.6em;
      text-align: center;
    }
  }

  button {
    background-color: red;
    border: 1px solid black;
    padding: 0.5rem;
    font-size: 1em;
    color: white;
    margin: 0.5rem;
  }
`

export const BlogCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;
  background-color: whitesmoke;
`
