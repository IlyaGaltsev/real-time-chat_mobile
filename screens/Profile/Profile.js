import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAuthState } from "react-firebase-hooks/auth"
import { SimpleLineIcons } from "@expo/vector-icons"
import * as C from "../../styled/PartsComponents.styled"
import { signOut } from "firebase/auth"
import { Context } from "../../Context"
import * as S from "./Profile.styled"
import { View } from "react-native"
import { useContext } from "react"

const Profile = () => {
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)
  const insets = useSafeAreaInsets()

  const logOut = () => {
    signOut(auth).catch(error => {
      console.log(error)
    })
  }
  //   import { getAnalytics, setUserProperties } from "firebase/analytics";

  // const analytics = getAnalytics();
  // setUserProperties(analytics, { favorite_food: 'apples' });

  return (
    <S.Container style={{ paddingTop: insets.top }}>
      <S.AvatarConatiner>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <S.AvatarImg
            size={64}
            rounded
            source={{
              uri: user.photoURL
            }}
          />
          <View>
            <C.Title style={{ marginBottom: 4 }}>Hi {user.displayName}</C.Title>
            <C.Subtitle>{user.email}</C.Subtitle>
          </View>
        </View>
        <SimpleLineIcons
          name="logout"
          size={24}
          onPress={logOut}
          color="black"
        />
      </S.AvatarConatiner>
    </S.Container>
  )
}

export { Profile }
