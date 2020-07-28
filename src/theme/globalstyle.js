import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html { font-family: 'Inter', sans-serif; }
  html, body, div, form, fieldset, legend, label {
    margin: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  th, td {
    text-align: left;
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6, table, caption, p, ol, ul, img {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: uppercase;
  }

  img { border: 0;}
  
`;
