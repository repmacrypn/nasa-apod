import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 48%;
  width: 100%;

  @media (max-width: 1140px) {
    max-width: 100%;
  }

  @media (max-width: 460px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`

export const DateInput = styled.input.attrs({
  type: 'date',
})`
  width: 30%;
  height: 46px;
  padding: 5px;
  border: 1px solid ${baseTheme.usedColors.blue2};
  border-radius: 8px;
  color: ${baseTheme.usedColors.black1};
  font-size: ${baseTheme.fontSize.m};
  font-family: inherit;

  @media (max-width: 460px) {
    width: 100%;
  }
`

export const Button = styled.button.attrs({
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
