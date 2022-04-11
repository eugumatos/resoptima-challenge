import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  form {
    width: 100%;
    max-width: 560px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-500);
    border-radius: 0.4rem;

    img {
      border-radius: 0.4rem 0.4rem 0 0;
      align-self: center;
      width: 100%;
      height: 10rem;
    }

    div {
      padding: 0.8rem;

      strong {
        color: var(--gray-900);
        font-size: 0.9rem;
      }

      span {
        color: var(--gray-800);
        margin-top: 0.4rem;
        display: block;
        font-size: 0.8rem;

        i {
          color: var(--gray-900);
          font-weight: bold;
        }
      }

      p {
        color: var(--gray-800);
        margin-top: 0.6rem;
        font-size: 0.8rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;