import { ChangeEvent, useState } from 'react'

import { IDateObj } from '@/types'

export const useSearchControl = () => {
  const [dateValue, setDateValue] = useState<IDateObj>({
    date: '',
    dateStart: '',
    dateEnd: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setDateValue({
      ...dateValue,
      [name]: value,
    })
  }

  return {
    dateValue,
    handleInputChange,
  }
}
