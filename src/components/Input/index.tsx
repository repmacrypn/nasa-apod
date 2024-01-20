import { IInput } from './interface'
import { DateInput } from './styled'

export const Input = ({ value, onChange, name }: IInput) => {
  return <DateInput value={value} onChange={onChange} name={name} />
}
