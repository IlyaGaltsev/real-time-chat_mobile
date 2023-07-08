import { useContext, useRef } from 'react'
import { Text } from 'react-native'
import uuid from 'react-native-uuid'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Message from '../../../components/Message'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import firebase from 'firebase/compat/app'

import { Context } from '../../../utils/context/Context'
import { IFirebaseContext } from '../../../types'
import BottomChatTools from '../../../components/BottomChatTools'

import * as S from './Chat.styled'

const Chat = () => {
  const { auth, firestore } = useContext<IFirebaseContext | any>(Context)

  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('created'))
  const insets = useSafeAreaInsets()

  const sendMessage = (value: string) => {
    if (value) {
      firestore.collection('messages').add({
        uid: user?.uid,
        displayName: user?.displayName,
        photoUrl: user?.photoURL,
        text: value,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }

  const scrollViewRef = useRef<any>()

  const handleChangeContentSize = () => {
    scrollViewRef.current.scrollToEnd({
      animated: true
    })
  }

  if (loading) {
    return <Text>Loading messages...</Text>
  }

  return (
    <>
      <S.ScrollContainer
        insets={insets}
        ref={scrollViewRef}
        onContentSizeChange={handleChangeContentSize}
      >
        <S.ChatWrapper insets={insets}>
          {messages?.map((message: any) => {
            return (
              <Message
                key={uuid.v4()}
                meUid={user?.uid}
                {...message}
              />
            )
          })}
        </S.ChatWrapper>
      </S.ScrollContainer>
      <BottomChatTools sendMessage={sendMessage} />
    </>
  )
}

export default Chat
