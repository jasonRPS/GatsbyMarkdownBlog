import styled from "styled-components"

export const MainNavLinksStyles = styled.div`
  #nav-links-container {
    display: flex;
    justify-content: space-around;
    /* grid-template-columns: 25% 25% 25% 25%; */
    color: white;
    font-size: 1.2em;
    align-items: center;
    padding: 0 1rem;

    #logo {
      justify-self: center;
    }

    ul {
      display: flex;
      color: white;
      list-style-type: none;
      margin: 0;

      li {
        padding: 0 2rem;
        &:hover {
          color: #f7931e;
          cursor: pointer;
          transition-duration: 0.5s;
        }

        i {
          margin: 0;
          padding: 0;
        }
      }
    }

    #login {
      display: flex;
      align-items: center;
      justify-self: right;
      p {
        margin: 0 1rem;
      }
    }

    #shopping {
      justify-self: right;
    }
  }
`
