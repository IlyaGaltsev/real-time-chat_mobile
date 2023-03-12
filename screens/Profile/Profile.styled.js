import { Avatar, Text } from "@rneui/themed"
import { View } from "react-native-ui-lib"
import styled from "styled-components"

export const Container = styled(View)(({}) => ({
  paddingRight: 20,
  paddingLeft: 20,
  flex: 1,
  justifyContent: "space-between"
}))

export const AvatarConatiner = styled(View)(({}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 10,
  justifyContent: 'space-between'
}))

export const AvatarImg = styled(Avatar)(({}) => ({
  marginRight: 16,
  width: 64,
  height: 64
}))


