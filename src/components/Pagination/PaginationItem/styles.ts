import styled from 'styled-components';

type ButtonProps = {
  isCurrent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 2.2rem;
  padding: 5px;
  margin: 5px;
  border-radius: 0.4rem;
  color: var(--gray-900);
  background: ${(props) => props.isCurrent ? '#A4A4A4': '#dcdcdc'};
  border: 1px solid var(--white);
`;
