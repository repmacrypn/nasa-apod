import { memo } from 'react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useSearchControl } from '@/hooks/useSearchControl'

import { ISelectorBlock } from './interface'
import { Container } from './styled'

export const SelectorBlock = memo(({ onButtonClick }: ISelectorBlock) => {
  const { dateValue, handleInputChange } = useSearchControl()

  return (
    <Container>
      <Input value={dateValue.dateStart} onChange={handleInputChange} name='dateStart' />
      <Input value={dateValue.dateEnd} onChange={handleInputChange} name='dateEnd' />
      <Button dateValue={dateValue} onClick={onButtonClick} />
    </Container>
  )
})
