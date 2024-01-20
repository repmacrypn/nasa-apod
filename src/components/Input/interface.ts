import { ChangeEvent } from 'react'

export interface IInput {
  value: string
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
