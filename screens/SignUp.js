import { useContext, useState } from "react"
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Context } from "../Context"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { auth } = useContext(Context)
  const navigation = useNavigation()

  const handleonclick = () => {}

  return (
    <View style={styles.container}>
      <Text>Create account</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.submit__button}
        onPress={handleonclick}
      >
        <Text style={styles.submit__button__text}>
          Create account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() =>
          navigation.navigate("SignIn")
        }
      >
        <Text style={styles.link__text}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white"
  },
  submit__button: {
    backgroundColor: "#578FFE",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  },
  submit__button__text: {
    color: "white",
    fontWeight: "700"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#578FFE",
    borderRadius: 10,
    padding: 10,
    color: "#5C5C5C",
    width: "100%"
  },
  link: {},
  link__text: {
    color: "#578FFE"
  }
})
