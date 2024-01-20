import styled, { css } from 'styled-components'

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

  @media (max-width: 1140px) {
    gap: 20px;
  }

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

export const Block = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1140px) {
    align-items: flex-end;
    margin-bottom: 10px;
  }
`

export const Hint = styled.p`
  font-size: ${baseTheme.fontSize.m};
  font-weight: ${baseTheme.fontWeight.light};
  line-height: 1.4;

  @media (max-width: 1140px) {
    order: 2;
  }
`

export const ImagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0 30px;

  @media (max-width: 460px) {
    margin: 0 10px;
  }
`

export const Image = styled.img.attrs(({ src }) => ({
  src,
}))`
  width: 100%;
  height: 100%;
  background-size: contain;
  border-radius: 8px;
`

export const searchBlockStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px 20px;

  @media (max-width: 1140px) {
    padding: 20px 30px;
  }

  @media (max-width: 460px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 15px 10px 20px;
  }
`
