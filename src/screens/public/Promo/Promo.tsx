import { useNavigation } from "@react-navigation/native"
import { Button, Text } from "@rneui/themed"
import { View } from "react-native"
import * as S from "./Promo.styled"
import * as P from "../../../styled/PublicComponent.styled"
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../../utils/constants/routesNames"
import { colors } from "../../../styled/colors"

export default function Promo() {
  const navigation = useNavigation()

  return (
    <P.Container>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          h2
          style={{ marginRight: 4 }}
        >
          RealTime Chat
        </Text>
        <S.TagText>MOBILE</S.TagText>
      </View>
      <View>
        <P.AppButton
          title="Sign In"
          radius={10}
          color={colors.primary}
          style={{ marginBottom: 12 }}
          onPress={() => navigation.navigate(SIGNIN_ROUTE as never)}
        />
        <P.AppButton
          title="Create Account"
          radius={10}
          variant="secoundary"
          color={"black"}
          onPress={() => navigation.navigate(SIGNUP_ROUTE as never)}
        />
      </View>
      <View></View>
    </P.Container>
  )
}
