import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const SearchButton = styled.button.attrs({
  type: 'button',
})`
  width: 30%;
  height: 46px;
  border: 1px solid ${baseTheme.usedColors.blue2};
  border-radius: 8px;
  background-color: ${baseTheme.usedColors.blue2};
  color: ${baseTheme.usedColors.white1};
  font-family: inherit;
  font-size: ${baseTheme.fontSize.l};
  transition: ${baseTheme.defaultTransition};

  @media (max-width: 460px) {
    width: 100%;
  }

  &:hover {
    background-color: ${baseTheme.usedColors.blue3};
    cursor: pointer;
  }

  &:active {
    transform: ${baseTheme.defaultTransform};
  }
`
