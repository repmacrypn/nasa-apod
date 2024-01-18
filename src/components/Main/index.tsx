import { SelectorBlock } from '@/components/Main/SelectorBlock'

import { Container, Title, Wrapper } from './styled'

export const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Welcome to the Astrology Picture Of The Day Application! Here you can see most
          beautiful shots of the planet we live on by the date or time period to your
          liking!
        </Title>
        <SelectorBlock />
      </Wrapper>
    </Container>
  )
}
