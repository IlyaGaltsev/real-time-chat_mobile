import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { config } from "./firebase-config"
import {
  privateRoutes,
  publicRoutes
} from "./routes"
import Admin from "./layouts/Admin"
import Default from "./layouts/Default"

const Stack = createNativeStackNavigator()
import { Context } from "./Context"

export default function App() {
  firebase.initializeApp(config)
  const auth = firebase.auth()
  const [user, loading] = useAuthState(auth)
  const firestore = firebase.firestore()

  return (
    <SafeAreaProvider
      styles={{ backgroundColor: "white" }}
    >
      <Context.Provider
        value={{ firebase, auth, firestore }}
      >
        <NavigationContainer>
          {user ? (
            <Admin>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}
              >
                {privateRoutes.map(
                  ({
                    name,
                    Component,
                    options
                  }) => {
                    return (
                      <Stack.Screen
                        options={options}
                        key={name}
                        name={name}
                        component={Component}
                      />
                    )
                  }
                )}
              </Stack.Navigator>
            </Admin>
          ) : (
            <Default>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}
              >
                {publicRoutes.map(
                  ({ name, Component }) => {
                    return (
                      <Stack.Screen
                        key={name}
                        name={name}
                        component={Component}
                      />
                    )
                  }
                )}
              </Stack.Navigator>
            </Default>
          )}
        </NavigationContainer>
      </Context.Provider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#578FFE",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
