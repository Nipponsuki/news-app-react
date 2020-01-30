import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');

  body {
		font-family: Ubuntu, sans-serif;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before { 
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  
  a{
    color: inherit;
    text-decoration: none;
    font-family: inherit;
  }
}
`;

export default GlobalStyle;
