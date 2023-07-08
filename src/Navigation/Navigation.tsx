import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'
import * as routes from '../utils/constants/routesNames'
import BottomTabBarIcon from '../components/BottomTabBarIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { publicRoutes, privateRoutes } from '../utils/constants/routes'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../styled/colors'
import Default from '../layouts/Default'
import type { IRoutes, TNavigation } from '../types'

export const Tab = createBottomTabNavigator()
export const Stack = createNativeStackNavigator()

const Navigation = ({ isAuth }: TNavigation) => {
  const options: NativeStackNavigationOptions = {
    headerShadowVisible: false,
    headerTitle: ''
  }

  if (!isAuth)
    return (
      <Default>
        <Stack.Navigator screenOptions={options}>
          {publicRoutes?.map(({ name, Component }: IRoutes) => {
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
    )

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="chevron-back"
            onPress={() => navigation.navigate(routes.PROFILE_ROUTE)}
            size={36}
            color="black"
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <BottomTabBarIcon
              route={route}
              focused={focused}
              color={color}
            />
          )
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        headerShadowVisible: false,
        tabBarShowLabel: false
      })}
    >
      {privateRoutes.map(({ name, Component, options }: any) => {
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
  )
}

export default Navigation
