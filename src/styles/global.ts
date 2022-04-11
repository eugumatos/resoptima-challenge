import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-900: #424242;
    --gray-800: #585858;
    --gray-500: #dcdcdc;
    --white: #F0F2F5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  
  body { 
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 ,h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;