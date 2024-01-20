import planetLogo from '@/assets/images/logo.svg'

import { Container, Logo, Title } from './styled'

export const Header = () => {
  return (
    <Container>
      <Logo alt='planet logo' src={planetLogo} />
      <Title>Astrology Picture Of The Day!</Title>
    </Container>
  )
}
