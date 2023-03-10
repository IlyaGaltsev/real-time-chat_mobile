import { useContext } from "react"
import { Text } from "react-native"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import { Context } from "../../Context"
import { Input } from "@rneui/themed"
import { FontAwesome5 } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import * as S from "./SignUp.styled"
import { SIGNIN_ROUTE } from "../../routesNames"
import { View } from "react-native-ui-lib"
import { Ionicons } from "@expo/vector-icons"
import { signUpFileds } from "../../utils/textFileds"

export const signInFileds = [
  {
    name: "email",
    placeholder: "enter your email",
    options: {
      required: "This is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
      }
    }
  },
  {
    name: "password",
    placeholder: "enter your password",
    type: "password",
    options: {
      required: "This is required"
    }
  }
]

const SignUp = () => {
  const { auth } = useContext(Context)
  const navigation = useNavigation()

  const {
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const authUser = data => {
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
        })
      })
      .catch(err => {
        let jsonError = JSON.stringify(err)
        const code = JSON.parse(jsonError).code

        if (code.includes("email-already-in-use")) {
          setError("email", {
            message: "Email already in use"
          })
        }
      })
  }

  return (
    <S.Container>
      <View>
        <S.Title>Sign Up</S.Title>
        <S.SubTitle>Create your account</S.SubTitle>
        {signUpFileds.map(({ name, placeholder, secureTextEntry, options, icon }) => {
          return (
            <S.TextFiled key={name}>
              <Controller
                control={control}
                name={name}
                rules={options}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                  <Input
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    style={error && { color: "red" }}
                    onChangeText={value => onChange(value)}
                    errorMessage={error && error.message}
                    leftIcon={() => icon(error)}
                  />
                )}
              />
            </S.TextFiled>
          )
        })}
        <S.PrimaryButton
          color
          title="Create account"
          onPress={handleSubmit(authUser)}
        />
      </View>
      <Text style={{ alignSelf: "center" }}>
        Do you have an account?
        <S.NavLink
          onPress={() => {
            navigation.navigate(SIGNIN_ROUTE)
          }}
        >
          {" "}
          Sign in
        </S.NavLink>
      </Text>
    </S.Container>
  )
}

export { SignUp }
