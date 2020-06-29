import styled from "styled-components"

export const MainNavLinksStyles = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 11;
  /* margin-bottom: 50px; */
  #nav-links-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: white;
    align-items: center;
    padding: 0.5rem;
    background-color: #ed2024;
    z-index: 10;
    /* margin-bottom: 50px; */

    /* margin-bottom: 100px; */

    .main-links {
      display: flex;
      color: white;
      list-style-type: none;
      margin: 0;
      @media (max-width: 1250px) {
        display: none;
      }

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
      @media (max-width: 1250px) {
        display: none;
      }
      p {
        margin: 0 1rem;
      }
    }

    #phone-number {
      justify-self: right;
      @media (max-width: 1250px) {
        display: none;
      }
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

  #mobile-button {
    font-size: 1.6em;
    display: none;
    @media (max-width: 1250px) {
      display: block;
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export const MobileNavLayout = styled.div`
  position: fixed;
  z-index: 5;
  margin-top: 56px;
  transition-duration: 0.4s;

  .mobile-call-button {
    width: 350px;

    button {
      margin: 2rem 3.5rem;
      background-color: #ed2024;
      border: none;
      padding: 1.3rem;
      text-align: center;
      color: white;
      font-size: 1.3em;
      border-radius: 15px;
    }
  }
`
