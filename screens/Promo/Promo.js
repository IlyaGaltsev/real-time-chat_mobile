import { useNavigation } from "@react-navigation/native"
import { Button, Text } from "@rneui/themed"
import { View } from "react-native"
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../routesNames"
import { colors } from "../../styled/colors"
import * as S from "./Promo.styled"
import * as P from "../../styled/PublicComponent.stylde"

const Promo = () => {
  const navigation = useNavigation()

  return (
    <P.Container>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
        <Text h2 style={{marginRight: 4}}>RealTime Chat</Text>
        <S.TagText>MOBILE</S.TagText>
      </View>
      <View>
        <P.AppButton
          title="Sign In"
          radius={10}
          color={colors.primary}  
          style={{ marginBottom: 12 }}
          onPress={() => navigation.navigate(SIGNIN_ROUTE)}
        />
        <P.AppButton
          title="Create Account"
          radius={10}
          variant="secoundary"
          color={"black"}
          onPress={() => navigation.navigate(SIGNUP_ROUTE)}
        />
      </View>
    </P.Container>
  )
}

export { Promo }
