import { createGlobalStyle } from 'styled-components'

import { sg } from './styleGuide'
import MochiyPopPOne from '@/assets/fonts/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Mochiy Pop P One';
		src: url(${MochiyPopPOne});
	}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${sg.fontFamily.primary};
  }

  body {
    color: ${sg.colors.grayscale.black};
    background: ${sg.colors.highlight};
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

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${sg.colors.white};
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${sg.colors.grayscale.border};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`
