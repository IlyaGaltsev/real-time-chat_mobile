import {
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from "react"
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native"
import {
  Entypo,
  Fontisto
} from "@expo/vector-icons"

import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Context } from "../Context"

export default function SideBar() {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const [routeName, setRouteName] =
    useState("Profile")

  useLayoutEffect(() => {
    setRouteName(
      navigation.getCurrentRoute().name
    )
  }, [navigation.getCurrentRoute().name])

  return (
    <View
      style={[
        styles.sidebar,
        { paddingTop: insets.top + 10 }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile")
        }}
      >
        <Image
          style={styles.sidebar__image}
          source={{
            uri: user.photoURL
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sidebar__tab,
          routeName === "Chat" &&
            styles.current_tab
        ]}
        onPress={() => {
          navigation.navigate("Chat")
        }}
      >
        <Entypo
          name="chat"
          size={24}
          color="#BED4FF"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sidebar__tab,
          routeName === "Settings" &&
            styles.current_tab
        ]}
        onPress={() =>
          navigation.navigate("Settings")
        }
      >
        <Fontisto
          name="player-settings"
          size={24}
          color="#BED4FF"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: "column",
    backgroundColor: "#578FFE",
    maxWidth: 60,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10
  },
  sidebar__image: {
    width: 32,
    height: 32,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "#BED4FF",
    marginBottom: 20
  },
  sidebar__tab: {
    marginBottom: 20
  },
  current_tab: {
    backgroundColor: "#4075DF",
    borderRadius: 10,
    padding: 8
  }
})
