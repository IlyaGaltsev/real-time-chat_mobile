import { useContext, useEffect, useState } from "react"
import { Text, View, StyleSheet, Button } from "react-native"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Context } from "../../Context"
import { Avatar } from "@rneui/themed"
import * as S from "./Profile.styled"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SimpleLineIcons } from "@expo/vector-icons"

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
            <S.Title>Hi {user.displayName}</S.Title>
            <S.Subtitle>{user.email}</S.Subtitle>
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
