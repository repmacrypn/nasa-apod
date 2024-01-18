import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const Container = styled.main`
  flex: 1 1 auto;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1 1 auto;
  padding: 0 30px;

  @media (max-width: 460px) {
    padding: 0 10px;
  }
`

export const Title = styled.p`
  max-width: 48%;
  width: 100%;
  font-size: ${baseTheme.fontSize.l};
  font-weight: ${baseTheme.fontWeight.light};
  line-height: 1.4;

  @media (max-width: 1140px) {
    max-width: 100%;
  }
`
