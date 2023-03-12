import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import * as routes from "./routesNames"
import { Chat } from "./screens/Chat"
import { Friends } from "./screens/Friends"
import { NewPage } from "./screens/NewPage"
import { Profile } from "./screens/Profile"
import { Promo } from "./screens/Promo"
import { Settings } from "./screens/Settings"
import { SignIn } from "./screens/SignIn"
import { SignUp } from "./screens/SignUp"

export const publicRoutes = [
  {
    name: routes.PROMO_ROUTE,
    Component: Promo,
    options: publicRoutesOptions
  },
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
    }
  },
  {
    name: routes.FRIENDS_ROUTE,
    Component: Friends,
    options: privateRoutesOptions
  },
  {
    name: routes.NEWPAGE_ROUTE,
    Component: NewPage,
    options: privateRoutesOptions
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
