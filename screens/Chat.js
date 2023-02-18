import {
  useContext,
  useRef,
  useState
} from "react"
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native"
import uuid from "react-native-uuid"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Message from "../components/Message"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { FontAwesome5 } from "@expo/vector-icons"
import firebase from "firebase/compat/app"
import { Context } from "../Context"

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(
    firestore
      .collection("messages")
      .orderBy("created")
  )
  const insets = useSafeAreaInsets()

  const [value, setValue] = useState("")

  const sendMessage = () => {
    if (value) {
      firestore.collection("messages").add({
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      })
      setValue("")
    }
  }
  const scrollViewRef = useRef()
  if (loading) {
    return <Text>LOADING</Text>
  } else {
    return (
      <KeyboardAvoidingView
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({
              animated: true
            })
          }
          style={[
            styles.chat__wrapper,
            {
              paddingTop: insets.top
            }
          ]}
        >
          <View
            style={[
              styles.chat__messages,
              {
                paddingBottom: insets.bottom + 40
              }
            ]}
          >
            {messages.map(message => {
              // console.log(messages)
              return (
                <Message
                  key={uuid.v4()}
                  meUid={user.uid}
                  {...message}
                />
              )
            })}
          </View>
        </ScrollView>
        <View
          style={[
            styles.chat__toolbar,
            {
              paddingBottom: insets.bottom
            }
          ]}
        >
          <TextInput
            style={styles.toolbar__input}
            value={value}
            onChangeText={text => setValue(text)}
          />
          <FontAwesome5
            style={styles.toolbar__sendButton}
            name="telegram-plane"
            size={24}
            color="#578FFE"
            onPress={sendMessage}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Chat

const styles = StyleSheet.create({
  chat__wrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent"
  },
  chat__messages: {
    backgroundColor: "#FEFDFE",
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  chat__toolbar: {
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row"
  },
  toolbar__input: {
    borderColor: "#E8EDF3",
    backgroundColor: "#F0F4F7",
    padding: 6,
    flex: 1,
    marginRight: 10,
    borderRadius: 10
  },
  toolbar__sendButton: {
    // backgroundColor: "white"
  }
})
