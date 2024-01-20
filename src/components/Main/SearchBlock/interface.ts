import { IDateObj } from '@/types'

export interface ISearchBlock {
  onButtonClick: (dateObj: IDateObj) => () => Promise<void>
}
