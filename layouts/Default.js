import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function Default({ children }) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  admin: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#578FFE",
  }
})
