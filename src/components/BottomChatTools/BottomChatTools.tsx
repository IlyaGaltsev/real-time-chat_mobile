import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'

import * as S from './BottomChatTools.styled'

const BottomChatTools = ({ sendMessage }: any) => {
  const [value, setValue] = useState('')
  const insets = useSafeAreaInsets()

  const handleClickSendMessage = () => {
    if (!value || !value.trim()) return

    sendMessage(value)
    setValue('')
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <S.ChatToolbar insets={insets}>
        <S.ChatToolbarInput
          value={value}
          onChangeText={text => setValue(text)}
        />
        <S.ButtonSend
          size={24}
          name="telegram-plane"
          onPress={handleClickSendMessage}
        />
      </S.ChatToolbar>
    </KeyboardAvoidingView>
  )
}

export default BottomChatTools
