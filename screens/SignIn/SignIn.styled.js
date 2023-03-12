import { Button } from "@rneui/base"
import { Text } from "@rneui/themed"
import { View } from "react-native-ui-lib"
import styled from "styled-components"
import { colors } from "../../styled/colors"

export const Container = styled(View)(() => ({
  flex: 1,
  padding: 20,
  justifyContent: "space-between",
}))

export const Title = styled(Text)(() => ({
  margin: 0,
  padding: 0,
  fontSize: 32,
  color: "black",
  paddingBottom: 6
}))

export const SubTitle = styled(Text)(() => ({
  margin: 0,
  padding: 0,
  fontSize: 16,
  color: "gray",
  paddingBottom: 20
}))

export const ErrorMessage = styled(Text)(() => ({
  color: colors.primary
}))

export const PrimaryButton = styled(Button)(() => ({
  background: colors.primary,
  paddingTop: 4,
  paddingBottom: 4,
  overflow: "hidden",
  borderRadius: 10
}))

export const NavLink = styled(Text)(() => ({
  color: colors.primary
}))

export const TextFiled = styled(View)(() => ({
  marginBottom: 4,
  color: 'red'
}))
