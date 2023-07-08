import * as routes from '../../utils/constants/routesNames'
import type { TBottomTabBarIcon } from '../../types'
import { Ionicons } from '@expo/vector-icons'

const BottomTabBarIcon = ({ route, focused, color }: TBottomTabBarIcon) => {
  const getIconName = (active: boolean): any => {
    let iconName

    switch (route.name) {
      case routes.PROFILE_ROUTE:
        iconName = active ? 'home' : 'home-outline'
        break
      case routes.CHAT_ROUTE:
        iconName = active ? 'chatbubbles' : 'chatbubbles-outline'
        break
      case routes.SETTINGS_ROUTE:
        iconName = active ? 'options' : 'options-sharp'
        break
      case routes.FRIENDS_ROUTE:
        iconName = active ? 'duplicate' : 'duplicate-outline'
        break
    }

    return iconName
  }

  const getIconAttributes = (): any => {
    return {
      name: getIconName(focused),
      color: color,
      size: 28
    }
  }

  return <Ionicons {...getIconAttributes()} />
}

export default BottomTabBarIcon
