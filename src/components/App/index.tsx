import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { GlobalStyles } from '@/styles'

import { Container } from './styled'

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}
