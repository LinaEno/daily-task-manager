import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.text};
    font-style: normal;
    
  }

#root {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

header {
  display: grid
  grid-area: 1 / 1 / 2 / 2;
}

main {
  grid-area: 1 / 2 / 2 / 5;
  
}

  aside {
    background-color: ${({ theme }) => theme.asideBackground};
    color: ${({ theme }) => theme.text};
    grid-area: 1 / 5 / 2 / 7;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
