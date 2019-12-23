import styled from "styled-components"

export const MainNavLinksStyles = styled.div`
  #nav-links-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    color: white;

    img {
      width: 250px;
      justify-self: center;
    }

    ul {
      display: flex;
      color: white;
      list-style-type: none;

      li {
        font-size: 1.3em;
        padding: 0 1rem;
      }
    }
  }
`
