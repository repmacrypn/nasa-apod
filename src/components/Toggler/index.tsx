import { memo } from 'react'

import { IToggler } from './interface'
import { Container, ToggleItem } from './styled'

export const Toggler = memo(({ isActive, handleToggleChange }: IToggler) => {
  return (
    <Container onClick={handleToggleChange}>
      <ToggleItem $isActive={isActive} />
    </Container>
  )
})
