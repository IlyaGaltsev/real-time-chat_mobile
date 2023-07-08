import { ParamListBase, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import firebase from "firebase/compat/app"
import { StyleProp, TextStyle, ViewStyle } from "react-native"

type Firebase = typeof firebase
type Auth = firebase.auth.Auth
type Firestore = firebase.firestore.Firestore

export interface IFirebaseContext {
  firebase: Firebase
  auth: Auth
  firestore: Firestore
}

export type TNavigation = {
  isAuth: boolean
}

export interface IRouteOptions {
  title?: string
  headerTitle?: string
  headerStyle?: StyleProp<ViewStyle>
  headerTintColor?: string
  headerShown?: boolean
  headerTitleStyle?: StyleProp<TextStyle>
  headerTitleAlign?: string
  presentation?: string
  animationTypeForReplace?: string
  animation?: string
  tabBarStyle?: StyleProp<ViewStyle>
}

export interface IRoutes {
  name: string
  Component: any
  options: NativeStackNavigationOptions
}

export type TBottomTabBarIcon = {
  route: RouteProp<ParamListBase, string>
  focused: boolean
  color: string
}

export type TMessage = {
  text: string
  uid: string
  photoUrl: string
  displayName: string
  meUid: string
}

export interface EdgeInsets {
  top: number
  right: number
  bottom: number
  left: number
}