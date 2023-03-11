import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import * as routes from "./routesNames"
import { Chat } from "./screens/Chat"
import { Profile } from "./screens/Profile"
import { Settings } from "./screens/Settings"
import { SignIn } from "./screens/SignIn"
import { SignUp } from "./screens/SignUp"

export const publicRoutes = [
  {
    name: routes.SIGNIN_ROUTE,
    Component: SignIn,
    options: publicRoutesOptions
  },
  {
    name: routes.SIGNUP_ROUTE,
    Component: SignUp,
    options: publicRoutesOptions
  }
]

export const privateRoutes = [
  {
    name: routes.PROFILE_ROUTE,
    Component: Profile,
    options: privateRoutesOptions
  },
  {
    name: routes.CHAT_ROUTE,
    Component: Chat,
    options: {
      presentation: "card",
      animationTypeForReplace: "pop",
      animation: "fade_from_bottom",
      headerShown: true,
      headerTitle: "Public chat",
      tabBarStyle: {
        display: "none"
      },
      // headerLeft: () => (
      //   <Ionicons
      //     name="chevron-back"
      //     onPress={() => {
      //       navigation.navigate(routes.PROFILE_ROUTE)
      //     }}
      //     size={36}
      //     color="black"
      //   />
      // )
    }
  },
  {
    name: routes.SETTINGS_ROUTE,
    Component: Settings,
    options: privateRoutesOptions
  }
]

const publicRoutesOptions = {
  presentation: "card",
  animationTypeForReplace: "pop",
  animation: "fade_from_bottom"
}

const privateRoutesOptions = {
  presentation: "card",
  animationTypeForReplace: "pop",
  animation: "fade_from_bottom"
}
