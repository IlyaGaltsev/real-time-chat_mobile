import { useContext } from "react"
import { Text, View, StyleSheet } from "react-native"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import * as S from "./NewPage.styled"

const NewPage = () => {
  // const { auth } = useContext(Context)
  // const [user, loading] = useAuthState(auth)

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.settings, { paddingTop: insets.top }]}>
      <View style={styles.settings__wrapper}>
        <Text>MAP</Text>
      </View>
    </View>
  )
}

export { NewPage }

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent"
  },
  settings__wrapper: {}
})
