import { IErrorText } from './interface'
import { Text } from './styled'

export const ErrorText = ({ children }: IErrorText) => {
  return <Text>Oops, Something went wrong... {children}</Text>
}
