import styled from "styled-components"

export const StyledFeaturedProducts = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 3rem auto;
  /* justify-content: space-evenly; */

  @media (max-width: 1440px) {
    max-width: 1250px;
  }

  @media (max-width: 1350px) {
    max-width: 1150px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
    margin: 0.5rem auto;
  }

  @media (max-width: 1030px) {
    /* max-width: 800px; */
    /* flex-direction: column-reverse; */
  }
`
