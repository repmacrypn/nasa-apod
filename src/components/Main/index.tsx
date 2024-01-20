import { ErrorText } from '@/components/ErrorText'
import { Loader } from '@/components/Loader'
import { SearchBlock } from '@/components/Main/SearchBlock'
import { SelectorBlock } from '@/components/Main/SelectorBlock'
import { Toggler } from '@/components/Toggler'
import { useFetchPicturesControl } from '@/hooks/useFetchPicturesControl'
import { RequestStatusType } from '@/types'

import { Block, Container, Hint, Image, ImagesBlock, Title, Wrapper } from './styled'

export const Main = () => {
  const { error, isActive, isLoading, pictures, onClick, handleToggleClick } =
    useFetchPicturesControl()

  return (
    <Container>
      <Wrapper>
        <Title>
          Welcome to the Astrology Picture Of The Day Application! Here you can see most
          beautiful shots of the planet we live on by the date or time period to your
          liking!
        </Title>
        <Block>
          <Hint>
            {isActive ? 'Find pictures by time period' : 'Find pictures by date'}
          </Hint>
          <Toggler isActive={isActive} handleToggleChange={handleToggleClick} />
        </Block>
      </Wrapper>
      {isActive ? (
        <SelectorBlock onButtonClick={onClick} />
      ) : (
        <SearchBlock onButtonClick={onClick} />
      )}
      {isLoading === RequestStatusType.Failed && <ErrorText>{error}</ErrorText>}
      {isLoading === RequestStatusType.Loading && <Loader />}
      {isLoading === RequestStatusType.Succeeded && (
        <ImagesBlock>
          {Array.isArray(pictures) ? (
            pictures.map(({ url, date, title }) => (
              <Image src={url} alt={title} key={date} />
            ))
          ) : (
            <Image src={pictures?.url} alt={pictures?.title} key={pictures?.date} />
          )}
        </ImagesBlock>
      )}
    </Container>
  )
}
