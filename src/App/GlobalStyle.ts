import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Bw Modelica Cyrillic DEMO';
    font-weight: 300;
    font-style: normal;
    /* font-family: 'Montserrat'; */
    /* font-style: normal;
    font-weight: normal; */
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;
export default GlobalStyle;
