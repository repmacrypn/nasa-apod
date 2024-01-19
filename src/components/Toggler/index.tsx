import { IToggler } from './interface'
import { Container, ToggleItem } from './styled'

export const Toggler = ({ isActive, handleToggleChange }: IToggler) => {
  return (
    <Container onClick={handleToggleChange}>
      <ToggleItem $isActive={isActive} />
    </Container>
  )
}
