import { createGlobalStyle } from 'styled-components'

import { sg } from './styleGuide'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${sg.fontFamily.primary};
  }

  body {
    color: ${sg.colors.grey800};
    background: ${sg.themeColors.highlight};
    font-size: ${sg.fontSize.default};
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1 {
    font-size: ${sg.heading[1]};
  }

  h2 {
    font-size: ${sg.heading[2]};
  }

  h3 {
    font-size: ${sg.heading[3]};
  }

  h4 {
    font-size: ${sg.heading[4]};
  }

  h5 {
    font-size: ${sg.heading[5]};
  }

  h6 {
    font-size: ${sg.heading[6]};
  }

  .Toastify__toast-container {
    width: auto;
    min-width: 320px;
    max-width: 440px;
  }

  .Toastify__close-button {
    color: ${sg.colors.black};
  }

  .Toastify__toast--success {
    background: ${sg.colors.white};
    color: ${sg.themeColors.primary};
    border: 1px solid ${sg.themeColors.primary};

    span {
      color: ${sg.colors.grey800};
    }
  }

  .Toastify__toast--error {
    color: ${sg.colors.white};
  }

  .Toastify__toast--error .Toastify__close-button {
    color: ${sg.colors.white};
  }

  .MuiTextField-root > label {
    font-weight: 600;
  }


  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${sg.colors.white};
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${sg.colors.grey500};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  .MuiMenuItem-root{
    cursor: pointer;

    &:hover {
      background-color: ${sg.colors.grey300};
    }
  }

  .MuiDialog-container{
    .MuiDialog-paper {
      overflow-y: initial;
    }
  }

`
