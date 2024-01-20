import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { nasaAPI } from '@/api'
import { IDateObj, INasaApod, RequestStatusType } from '@/types'
import { formatDate } from '@/utils'

export const useFetchPicturesControl = () => {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState<RequestStatusType>(RequestStatusType.Idle)
  const [error, setError] = useState<string | null>(null)
  const [pictures, setPictures] = useState<INasaApod | INasaApod[] | null>(null)

  const handleToggleClick = useCallback(() => {
    setIsActive((prev) => !prev)
    setPictures(null)
  }, [])

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

  const onClick = useCallback(
    (dateObj: IDateObj) => async () => {
      const { date, dateStart, dateEnd } = dateObj

      fetchPictures(date, dateStart, dateEnd)
    },
    [],
  )

  useEffect(() => {
    const date = formatDate(new Date())

    fetchPictures(date)
  }, [])

  return {
    isActive,
    isLoading,
    error,
    pictures,
    handleToggleClick,
    onClick,
  }
}
