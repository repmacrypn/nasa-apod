import { memo } from 'react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useSearchControl } from '@/hooks/useSearchControl'

import { ISearchBlock } from './interface'
import { Container } from './styled'

export const SearchBlock = memo(({ onButtonClick }: ISearchBlock) => {
  const { dateValue, handleInputChange } = useSearchControl()

  return (
    <Container>
      <Input name='date' value={dateValue.date} onChange={handleInputChange} />
      <Button dateValue={dateValue} onClick={onButtonClick} />
    </Container>
  )
})
