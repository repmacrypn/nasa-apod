import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const DateInput = styled.input.attrs(({ name }) => ({
  name,
  type: 'date',
}))`
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
