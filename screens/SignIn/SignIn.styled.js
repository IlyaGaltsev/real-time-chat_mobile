import { Button } from "@rneui/base"
import { Text } from "@rneui/themed"
import { TouchableOpacity } from "react-native"
import { View } from "react-native-ui-lib"
import styled from "styled-components"

export const Container = styled(View)(() => ({
  flex: 1,
  padding: 20
}))

export const Title = styled(Text)(() => ({
  fontSize: 32,
  color: "black",
  paddingBottom: 6
}))

export const SubTitle = styled(Text)(() => ({
  fontSize: 16,
  color: "gray",
  paddingBottom: 20
}))

export const ErrorMessage = styled.Text`
  color: red;
`

export const PrimaryButton = styled(Button)(() => ({
  background: "red",
  marginBottom: 20,
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: 10
}))

export const NavLink = styled(Text)(() => ({
  color: "red",
}))

export const TextFiled = styled(View)(() => ({
  marginBottom: 20
}))
