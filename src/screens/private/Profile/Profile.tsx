import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAuthState } from "react-firebase-hooks/auth"
import { SimpleLineIcons } from "@expo/vector-icons"
import * as C from "../../../styled/PartsComponents.styled"
import { signOut } from "firebase/auth"
import * as S from "./Profile.styled"
import { View } from "react-native"
import { useContext } from "react"
import { Context } from "../../../utils/context/Context"

const Profile = () => {
  const { auth } = useContext<any>(Context)
  const [user, loading] = useAuthState(auth)
  const insets = useSafeAreaInsets()

  const logOut = () => {
    signOut(auth).catch(error => {
      console.log(error)
    })
  }

  return (
    <S.Container style={{ paddingTop: insets.top }}>
      <S.AvatarConatiner>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <S.AvatarImg
            size={64}
            rounded
            source={{
              uri: user?.photoURL ?? ''
            }}
          />
          <View>
            <C.Title style={{ marginBottom: 4 }}>Hi {user?.displayName}</C.Title>
            <C.Subtitle>{user?.email}</C.Subtitle>
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

export default Profile
