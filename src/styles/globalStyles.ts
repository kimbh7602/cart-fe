'use client'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* reset */
:root {
  box-sizing: border-box;
  font-family: 'Spoqa Han Sans Neo', 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-size: inherit;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 14px;

  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;

  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;

  overscroll-behavior: none;

  .Toastify__toast-container {
    padding: 12px;
  }

  .Toastify__toast {
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0;
  }

  .Toastify__toast--success {
    background: #EFFAF6;
    color: #00A868;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.6px;
  }

  .Toastify__toast--error {
    background: #FFF6F7;
    color: #F6475A;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.6px;
  }
}

body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}
a:link,
a:hover,
a:active,
a:visited {
  color: inherit;
}

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button,
section,
dd {
  border: none;
  outline: none;
  font-family: inherit;
  background: transparent;
  margin: 0;
  padding: 0;
}

pre {
  font-family: inherit;
}

button,
input,
select,
textarea {
  font-family: inherit; /* 1 */
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

i {
  font-style: normal;
}

b,
strong {
  font-weight: 700;
}

img {
  user-select: none;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

svg {
  vertical-align: middle;
}

button {
  user-select: none;
  cursor: pointer;
}

textarea {
  overflow: auto;
}

::-ms-clear {
  display: none;
}

/* input 기본 스타일 초기화 */
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  margin: 0;
  padding: 0;
}

input::-webkit-search-cancel-button {
  display: none;
}

input:focus {
  outline: none;
}

input[type='text']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type='password']::-ms-reveal {
  display: none;
}

pre {
  font-family: inherit;
}

*[disabled] {
  cursor: not-allowed;
}

/* scroll style */
::-webkit-scrollbar {
  display: none;
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #f9f9f9;
  border-radius: 3px;
  background-clip: padding-box;
  border: 1px solid transparent;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 3px;
}

iframe {
  background: transparent !important;
}

`

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  border-left: ${({ theme }) => `1px solid ${theme.gray_scale.gray_50}`};
  border-right: ${({ theme }) => `1px solid ${theme.gray_scale.gray_50}`};

  @media screen and (max-width: 480px) {
    border: none;
  }
`
