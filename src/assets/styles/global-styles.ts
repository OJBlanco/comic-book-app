import { createGlobalStyle } from 'styled-components'

import { FONT_FACES } from './typography'
import { FontFamily } from './variables'

export const GlobalStyle = createGlobalStyle`
${FONT_FACES}
  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: ${FontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    margin: 0;
  }
   
  #app {
    height: 100%;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${FontFamily};
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    font-weight: normal;
  }
 
`
