import { useEffect, useState } from 'react'
import axios from 'axios'

import { nasaAPI } from '@/api'
import { ErrorText } from '@/components/ErrorText'
import { Loader } from '@/components/Loader'
import { SearchBlock } from '@/components/Main/SearchBlock'
import { SelectorBlock } from '@/components/Main/SelectorBlock'
import { Toggler } from '@/components/Toggler'
import { IDateObj, INasaApod, RequestStatusType } from '@/types'
import { formatDate } from '@/utils'

import { Block, Container, Hint, Image, ImagesBlock, Title, Wrapper } from './styled'

export const Main = () => {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState<RequestStatusType>(RequestStatusType.Idle)
  const [error, setError] = useState<string | null>(null)
  const [pictures, setPictures] = useState<INasaApod | INasaApod[] | null>(null)

  const handleToggleClick = () => {
    setIsActive((prev) => !prev)
    setPictures(null)
  }

  const fetchPictures = async (date = '', dateStart = '', dateEnd = '') => {
    try {
      setIsLoading(RequestStatusType.Loading)

      const fetchedDate = await nasaAPI.getAPOD(date, dateStart, dateEnd)

      setPictures(fetchedDate)
      setError(null)
      setIsLoading(RequestStatusType.Succeeded)
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const err = e.response ? e.response?.data.msg : e.message

        setError(err)
      }
      setIsLoading(RequestStatusType.Failed)
    }
  }

  const onClick = (dateObj: IDateObj) => async () => {
    const { date, dateStart, dateEnd } = dateObj

    fetchPictures(date, dateStart, dateEnd)
  }

  useEffect(() => {
    const date = formatDate(new Date())

    fetchPictures(date)
  }, [])

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
