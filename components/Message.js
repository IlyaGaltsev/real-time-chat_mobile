import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native"

const Message = ({
  text,
  uid,
  photoUrl,
  displayName,
  meUid
}) => {
  const itsNoMe = uid !== meUid
  const photo = photoUrl
  return (
    <View
      style={[
        styles.message__wrapper,
        !itsNoMe && styles.me_message
      ]}
    >
      {itsNoMe && (
        <Image
          style={styles.message__avatar}
          source={{
            uri: photo
          }}
        />
      )}
      <View
        style={[
          styles.message,
          itsNoMe && styles.message_other
        ]}
      >
        {itsNoMe && (
          <Text
            style={[
              styles.message__displayName,
              itsNoMe &&
                styles.message__displayName_other
            ]}
          >
            {displayName}
          </Text>
        )}

        <Text
          style={[
            styles.message__text,
            itsNoMe && styles.message__text_other
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  )
}
export default Message

const styles = StyleSheet.create({
  message__wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10
  },
  message: {
    backgroundColor: "#4075DF",
    maxWidth: "70%",
    borderRadius: 20,
    padding: 10
  },
  message_other: {
    backgroundColor: "#F1F5FE",
    maxWidth: "70%",
    borderRadius: 20,
    padding: 10
  },
  me_message: {
    alignSelf: "flex-end"
  },
  message__avatar: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    marginRight: 6
  },
  message__displayName: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 4
  },
  message__text: {
    color: "white"
  },
  message__displayName_other: {
    color: "#5C5C5C"
  },
  message__text_other: {
    color: "#5C5C5C"
  }
})
