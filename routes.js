import * as routes from "./routesNames"
import Chat from "./screens/Chat"
import Profile from "./screens/Profile"
import Settings from "./screens/Settings"
import { SignIn } from "./screens/SignIn"
import SignUp from "./screens/SignUp"

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
    name: "Profile",
    Component: Profile,
    options: privateRoutesOptions
  },
  {
    name: "Chat",
    Component: Chat,
    options: privateRoutesOptions
  },
  {
    name: "Settings",
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
