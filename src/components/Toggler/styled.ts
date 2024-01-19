import styled from 'styled-components'

import { baseTheme } from '@/styles/variables'

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 50px;
  height: 28px;
  z-index: 1;
  background-color: ${baseTheme.usedColors.white1};
  border: 2px solid;
  border-color: ${baseTheme.usedColors.blue3};
  border-radius: 28px;
  transition: ${baseTheme.defaultTransition};

  &:hover {
    cursor: pointer;
  }
`

export const ToggleItem = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: -2px;
  top: -1px;
  width: 27px;
  height: 27px;
  border: 2px solid;
  border-color: ${baseTheme.usedColors.blue3};
  border-radius: 50%;
  transform: translateX(${({ $isActive }) => ($isActive ? '23px' : '0px')});
  transition: ${baseTheme.defaultTransition};
`
