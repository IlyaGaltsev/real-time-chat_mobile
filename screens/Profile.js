import { useContext, useState } from "react"
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Button
} from "react-native"
import { Context } from "../App"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Admin from "../layouts/Admin"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Profile = () => {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)
  const insets = useSafeAreaInsets()

  const logOut = () => {
    signOut(auth).catch(error => {
      console.log(error)
    })
  }

  return (
    <View
      style={[
        styles.profile,
        { paddingTop: insets.top }
      ]}
    >
      <View style={styles.profile__wrapper}>
        <Text style={styles.profile__title}>
          Hi {user.displayName}
        </Text>
        <Text style={styles.profile__description}>
          {user.email}
        </Text>
        <Button title="logout" onPress={logOut} />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    flexDirection: "column",
  },
  profile__wrapper: {
    backgroundColor: "#FEFDFE",
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  profile__title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4
  },
  profile__description: {
    // color:
  }
})
