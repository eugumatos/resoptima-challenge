import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border: 1px solid var(--gray-500);
  border-radius: 0.4rem;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 0.9rem;
    background: transparent;
    border: none;
    outline: none;
  }

  button {
    background: transparent;
    border: none;
    margin-right: 0.8rem;
  }
`;
