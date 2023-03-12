import { Button } from "@rneui/base"
import { Text } from "@rneui/themed"
import { View } from "react-native-ui-lib"
import styled from "styled-components"
import { colors } from "./colors"
// import { colors } from "../../styled/colors"

export const Container = styled(View)(({ justifyContent }) => ({
  flex: 1,
  padding: 20,
  justifyContent: justifyContent ? justifyContent : "space-between"
}))

export const AppButton = styled(Button)(({ variant }) => ({
  paddingTop: 4,
  paddingBottom: 4,
  overflow: "hidden",
  borderRadius: 10,
  background: variant === "secoundary" ? colors.secoundary : colors.primary
}))

export const SecoundaryButton = styled(Button)(({}) => ({
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: 10,
  background: "black"
}))
