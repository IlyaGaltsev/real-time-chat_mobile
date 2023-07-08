import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as S from './Default.styled'

export default function Default({ children }: any) {
  const insets = useSafeAreaInsets()

  return <S.Wrapper insets={insets}>{children}</S.Wrapper>
}
