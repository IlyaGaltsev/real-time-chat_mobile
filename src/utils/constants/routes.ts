import * as routes from "./routesNames"
import { IRouteOptions } from "../../types"
import { IRoutes } from "../../types"

import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import Promo from "../../screens/public/Promo"
import SignIn from "../../screens/public/SignIn"
import SignUp from "../../screens/public/SignUp"
import Chat from "../../screens/private/Chat"
import Profile from "../../screens/private/Profile"
import Friends from "../../screens/private/Friends"
import Settings from "../../screens/private/Settings"

const publicRoutesOptions: NativeStackNavigationOptions = {
  presentation: "card",
  animationTypeForReplace: "pop",
  animation: "fade_from_bottom"
}

const privateRoutesOptions: NativeStackNavigationOptions = {
  presentation: "card",
  animationTypeForReplace: "pop",
  animation: "fade_from_bottom"
}

const publicRoutes: IRoutes[] = [
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

const privateRoutes: IRoutes[] = [
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
      // tabBarStyle: {
      //   display: "none"
      // }
    }
  },
  {
    name: routes.FRIENDS_ROUTE,
    Component: Friends,
    options: privateRoutesOptions
  },
  {
    name: routes.SETTINGS_ROUTE,
    Component: Settings,
    options: privateRoutesOptions
  }
]

export { publicRoutes, privateRoutes }
