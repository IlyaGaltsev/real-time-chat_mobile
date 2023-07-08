import type { EdgeInsets } from './../../types/index'
import { View } from 'react-native-ui-lib'
import styled from 'styled-components'

type TDefaultStyle = {
  insets: EdgeInsets
}

export const Wrapper = styled(View)<TDefaultStyle>(({ insets }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingTop: insets.top,
  paddingBottom: insets.bottom,
  paddingLeft: insets.left,
  paddingRight: insets.right
}))
