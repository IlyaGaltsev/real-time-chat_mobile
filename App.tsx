import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DefaultTheme, NavigationContainer, DarkTheme } from "@react-navigation/native"
import { useAuthState } from "react-firebase-hooks/auth"

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { config } from "./src/utils/config/firebase-config"
import { colors } from "./src/styled/colors"
import { Context } from "./src/utils/context/Context"
import { Text } from "react-native"
import { IFirebaseContext } from "./src/types"
import React from "react"
import Navigation from "./src/Navigation"

export default function App() {
  firebase.initializeApp(config)
  const auth: any = firebase.auth()
  const [user, loading] = useAuthState(auth)
  const firestore = firebase.firestore()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background
    }
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Context.Provider value={{ firebase, auth, firestore } as IFirebaseContext}>
        <NavigationContainer theme={MyTheme}>
          <Navigation isAuth={!!user} />
        </NavigationContainer>
      </Context.Provider>
    </SafeAreaProvider>
  )
}
