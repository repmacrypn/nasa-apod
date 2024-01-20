import axios from 'axios'

import { INasaApod } from '@/types'

const NASA_URL = process.env.REACT_APP_NASA_URL
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

const nasaInstance = axios.create({
  baseURL: NASA_URL,
  params: {
    api_key: NASA_API_KEY,
  },
})

export const nasaAPI = {
  async getAPOD(date = '', start_date = '', end_date = '') {
    const res = await nasaInstance.get<INasaApod | INasaApod[]>('apod', {
      params: {
        date,
        start_date,
        end_date,
      },
    })

    return res.data
  },
}
