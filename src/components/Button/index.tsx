import { IButton } from './interface'
import { SearchButton } from './styled'

export const Button = ({ onClick, dateValue }: IButton) => {
  return <SearchButton onClick={onClick({ ...dateValue })}>Search!</SearchButton>
}
