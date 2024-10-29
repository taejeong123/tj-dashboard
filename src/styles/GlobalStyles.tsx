"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
