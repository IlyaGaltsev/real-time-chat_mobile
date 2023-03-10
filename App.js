import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DefaultTheme, NavigationContainer , DarkTheme} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { config } from "./firebase-config"
import { privateRoutes, publicRoutes } from "./routes"
import Default from "./layouts/Default"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
import { Context } from "./Context"
import { colors } from "./styled/colors"

export default function App() {
  firebase.initializeApp(config)
  const auth = firebase.auth()
  const [user, loading] = useAuthState(auth)
  const firestore = firebase.firestore()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      // background: colors.background,
      background: colors.background,
      // card: 'rgb(255, 255, 255)',
      // text: 'rgb(28, 28, 30)',
      // border: colors.background,
      // notification: 'rgb(255, 69, 58)',
    }
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Context.Provider value={{ firebase, auth, firestore }}>
        <NavigationContainer theme={MyTheme}>
          {user ? (
            <Tab.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              {privateRoutes.map(({ name, Component, options }) => {
                return (
                  <Tab.Screen
                    options={options}
                    key={name}
                    name={name}
                    component={Component}
                  />
                )
              })}
            </Tab.Navigator>
          ) : (
            <Default>
              <Stack.Navigator
                screenOptions={{
                  headerTitle: "",
                  headerStyle: {
                    // backgroundColor: colors.background
                    borderWidth: 0
                  }
                }}
              >
                {publicRoutes.map(({ name, Component }) => {
                  return (
                    <Stack.Screen
                      key={name}
                      name={name}
                      component={Component}
                    />
                  )
                })}
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
