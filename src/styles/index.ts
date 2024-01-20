import { createGlobalStyle } from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const GlobalStyles = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 100%;
        line-height: 1;
        border: 0;
        scroll-behavior: smooth;
        background-color: ${baseTheme.usedColors.white1};
        color: ${baseTheme.usedColors.black1};
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;

        &,
        &::before,
        &::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    :focus,
    :active {
        outline: none;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${baseTheme.usedColors.blue1};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${baseTheme.usedColors.blue2};
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${baseTheme.usedColors.blue3};
    }
`
