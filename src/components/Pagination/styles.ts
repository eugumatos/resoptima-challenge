import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.7rem;

  > div {
    color: var(--gray-900);
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.p`
 width: 0.8rem;
 margin-top: 0.4rem;
 text-align: center;
`;