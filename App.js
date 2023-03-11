import * as routes from "./routesNames"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DefaultTheme, NavigationContainer, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { config } from "./firebase-config"
import { privateRoutes, publicRoutes } from "./routes"
import Default from "./layouts/Default"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { Context } from "./Context"
import { colors } from "./styled/colors"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  firebase.initializeApp(config)
  const auth = firebase.auth()
  const [user, loading] = useAuthState(auth)
  const firestore = firebase.firestore()

  // const [user, loading] = useAuthState(auth)
  // const firestore = firebase.firestore()

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user)
  //   if (initializing) setInitializing(false)
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
  //   return subscriber // unsubscribe on unmount
  // }, [])

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      // background: colors.background,
      background: colors.background
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
              screenOptions={({ route, navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="chevron-back"
                    onPress={() => {
                      navigation.navigate(routes.PROFILE_ROUTE)
                    }}
                    size={36}
                    color="black"
                  />
                ),
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName

                  if (route.name === routes.PROFILE_ROUTE) {
                    iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                  }

                  if (route.name === routes.CHAT_ROUTE) {
                    iconName = focused ? "chatbox-sharp" : "chatbox-outline"
                  }

                  if (route.name === routes.SETTINGS_ROUTE) {
                    iconName = focused ? "settings-sharp" : "settings-outline"
                  }

                  return (
                    <Ionicons
                      name={iconName}
                      size={28}
                      color={color}
                    />
                  )
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                headerShadowVisible: false,
                tabBarShowLabel: false
              })}
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
                  headerShadowVisible: false,
                  headerTitle: "",
                  headerStyle: {
                    borderWidth: 0
                  },
                  background: "red"
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
