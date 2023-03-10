import { useContext, useState } from "react"
import { Text, View, TextInput, StyleSheet } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import { Context } from "../../Context"
import { Input, Icon, Button } from "@rneui/themed"
import { FontAwesome5 } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import * as S from "./SignIn.styled"
import { SIGNUP_ROUTE } from "../../routesNames"

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

const SignIn = () => {
  const { auth } = useContext(Context)
  const navigation = useNavigation()

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const authUser = data => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch(err => {
      let jsonError = JSON.stringify(err)
      const code = JSON.parse(jsonError).code
      console.log(code)
      if (code.includes("password")) {
        setError("password", {
          message: "Incorrect password"
        })
      }

      if (code.includes("requests")) {
        setError("email", {
          message: "Too many login attempts"
        })
      }

      if (code.includes("found")) {
        setError("email", {
          message: "Not found this user"
        })
      }
    })
  }

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <S.SubTitle>Sign in your account</S.SubTitle>
      <S.TextFiled>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "This is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              placeholder="Enter your email"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              errorMessage={error && error.message}
              leftIcon={
                <Entypo
                  name="email"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              }
            />
          )}
        />
      </S.TextFiled>
      <S.TextFiled>
        <Controller
          control={control}
          name="password"
          rules={{ required: "This is required" }}
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <Input
              placeholder="Enter your password"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              secureTextEntry={true}
              errorMessage={error && error.message}
              leftIcon={
                <FontAwesome5
                  name="star-of-life"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              }
            />
          )}
        />
      </S.TextFiled>
      <S.PrimaryButton
        color
        title="Sign in"
        onPress={handleSubmit(authUser)}
      />
      <Text>
        Don't have account?
        <S.NavLink
          onPress={() => {
            navigation.navigate(SIGNUP_ROUTE)
          }}
        >
          {" "}
          Create account
        </S.NavLink>
      </Text>
    </S.Container>
  )
}

export { SignIn }
