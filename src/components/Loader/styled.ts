import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const Item = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 4px solid ${baseTheme.usedColors.blue1};
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  animation: spinAnimation 1s linear infinite;

  @keyframes spinAnimation {
    to {
      transform: rotate(360deg);
    }
  }
`
