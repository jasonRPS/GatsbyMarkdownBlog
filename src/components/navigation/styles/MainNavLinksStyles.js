import styled from "styled-components"

export const MainNavLinksStyles = styled.div`
  #nav-links-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    color: white;
    justify-items: center;
    font-size: 1.2em;
    align-items: center;

    img {
      width: 250px;
      justify-self: center;
    }

    ul {
      display: flex;
      color: white;
      list-style-type: none;
      margin: 0;

      li {
        padding: 0 1rem;
        &:hover {
          color: #f7931e;
          cursor: pointer;
          transition-duration: 0.5s;
          border-bottom: 2px solid #f7931e;
        }
      }
    }

    #search {
      align-items: center;
      display: flex;

      input {
        margin: 0 1rem;
      }
    }

    #login {
      display: flex;
      align-items: center;
      p {
        margin: 0 1rem;
      }
    }
  }
`
