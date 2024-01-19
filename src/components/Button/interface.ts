import { IDateObj } from '@/types'

export interface IButton {
  dateValue: IDateObj
  onClick: (dateObj: IDateObj) => () => Promise<void>
}
