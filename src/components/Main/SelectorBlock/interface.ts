import { IDateObj } from '@/types'

export interface ISelectorBlock {
  onButtonClick: (dateObj: IDateObj) => () => Promise<void>
}
