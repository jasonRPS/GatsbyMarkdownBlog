import styled from "styled-components"

export const MainNavLinksStyles = styled.div`
  #nav-links-container {
    display: flex;
    justify-content: space-around;
    color: white;
    align-items: center;
    padding: 0 1rem;

    #logo {
      justify-self: center;
    }

    .main-links {
      display: flex;
      color: white;
      list-style-type: none;
      margin: 0;

      .dropdown {
        position: relative;
        display: inline-block;

        padding: 0 2rem;
        &:hover {
          /* color: #f7931e; */
          cursor: pointer;
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

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    /* top: 50px; */
    box-shadow: 5px 8px 15px black;
    padding: 12px 0;
    /* z-index: -1; */

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        color: black;

        font-size: 0.8em;
        padding: 0.5rem 1rem;

        &:hover {
          color: red;
          font-weight: bold;
        }
      }
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`
