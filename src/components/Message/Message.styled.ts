import { Image, Text } from 'react-native'
import { View } from 'react-native-ui-lib'
import styled from 'styled-components'
import { colors } from '../../styled/colors'

type IMessageStyle = {
  isMyMessage: boolean
}

export const MessageWrapper = styled(View)<IMessageStyle>(({ isMyMessage }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginBottom: 10,
  alignSelf: isMyMessage ? 'flex-end' : ''
}))

export const MessageBody = styled(View)<IMessageStyle>(({ isMyMessage }) => ({
  backgroundColor: isMyMessage ? colors.backgroundMessage : colors.backgroundMessageOther,
  maxWidth: '70%',
  borderRadius: 20,
  padding: 10
}))

export const MessageAvatar = styled(Image)(({}) => ({
  width: 30,
  height: 30,
  borderRadius: 100,
  marginRight: 6
}))

export const DisplayName = styled(Text)(({}) => ({
  fontSize: 12,
  fontWeight: '700',
  marginBottom: 4,
  color: colors.fontOther
}))

export const MessageText = styled(Text)<IMessageStyle>(({ isMyMessage }) => ({
  color: isMyMessage ? colors.fontMy : colors.fontOther
}))
