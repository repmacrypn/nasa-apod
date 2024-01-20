import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 460px) {
    padding: 0 10px;
  }
`

export const Logo = styled.img`
  max-width: 100px;
  width: 100%;
  background-size: contain;
`

export const Title = styled.h2`
  font-size: ${baseTheme.fontSize.xl};
  font-weight: ${baseTheme.fontWeight.medium};
  text-align: right;
  line-height: 1.4;
`
