import type { ImageSourcePropType } from 'react-native'
import type { TMessage } from '../../types'
import * as S from './Message.styled'

const Message = ({ text, uid, photoUrl, displayName, meUid }: TMessage) => {
  const itMyMessage = uid === meUid

  const getImageSource = (): ImageSourcePropType => {
    if (!photoUrl) return {}
    
    return {
      uri: photoUrl
    }
  }

  return (
    <S.MessageWrapper isMyMessage={itMyMessage}>
      {!itMyMessage && <S.MessageAvatar source={getImageSource()} />}
      <S.MessageBody isMyMessage={itMyMessage}>
        {!itMyMessage && <S.DisplayName>{displayName}</S.DisplayName>}
        <S.MessageText isMyMessage={itMyMessage}>{text}</S.MessageText>
      </S.MessageBody>
    </S.MessageWrapper>
  )
}
export default Message
