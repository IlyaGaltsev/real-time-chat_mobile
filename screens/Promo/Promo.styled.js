import { Button, Text } from "@rneui/themed"
import styled from "styled-components"
import { colors } from "../../styled/colors"

export const TagText = styled(Text)(() => ({
  overflow: "hidden",
  borderRadius: 8,
  background: colors.primary,
  padding: 8,
  paddingTop: 4,
  paddingBottom: 4,
  color: "white",
  fontSize: 16,
  fontWeight: "700",
  marginBottom: 8
}))
