import Chat from "./screens/Chat"
import Profile from "./screens/Profile"
import Settings from "./screens/Settings"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"

export const publicRoutes = [
  {
    name: "SignIn",
    Component: SignIn
  },
  {
    name: "SignUp",
    Component: SignUp
  },
]

export const privateRoutes = [
  {
    name: "Profile",
    Component: Profile
  },
  {
    name: "Chat",
    Component: Chat
  },
  {
    name: "Settings",
    Component: Settings
  }
]
