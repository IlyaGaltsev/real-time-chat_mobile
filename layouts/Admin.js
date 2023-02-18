import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import SideBar from "../components/SideBar"

export default function Admin({ children }) {

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <SideBar />
      <View
        style={[
          styles.adminChild
        ]}
      >
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  admin: {},
  adminChild: {
    flex: 1,
    borderRadius: 10
  }
})
