import { TextInput, View } from 'react-native'
import styled from 'styled-components'
import { colors } from '../../styled/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import type { EdgeInsets } from './../../types/index'

type TChatToolbar = {
  insets: EdgeInsets
}

export const ChatToolbar = styled(View)<TChatToolbar>(({ insets }) => ({
  padding: 10,
  backgroundColor: colors.toolbarBackground,
  width: '100%',
  flexDirection: 'row',
  paddingBottom: insets.bottom
}))

export const ChatToolbarInput = styled(TextInput)(({}) => ({
  borderColor: colors.inputBorder,
  backgroundColor: colors.inputBackground,
  padding: 6,
  flex: 1,
  marginRight: 10,
  borderRadius: 10
}))

export const ButtonSend = styled(FontAwesome5)(({}) => ({
  color: colors.buttonFont
}))
