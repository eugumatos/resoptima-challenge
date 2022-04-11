import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';

const SearchBoxBase: ForwardRefRenderFunction<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>> = ({ name, ...rest }: InputHTMLAttributes<HTMLInputElement>, ref) => {
  return (
    <Container>
      <input ref={ref} name={name} {...rest}  />
      
      <button type="submit">
        <FiSearch size={18} color="#424242" />
      </button>
    </Container>
  );
}

export const SearchBox = forwardRef(SearchBoxBase);