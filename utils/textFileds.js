import { FontAwesome5 } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
// import { useForm } from "react-hook-form"

// const { watch } = useForm()
export const signInFileds = [
  {
    name: "email",
    placeholder: "Enter your email",
    options: {
      required: "This is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
      }
    },
    secureTextEntry: false,
    icon: error => {
      return (
        <Entypo
          name="email"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  },
  {
    name: "password",
    placeholder: "Enter your password",
    secureTextEntry: true,
    options: {
      required: "This is required"
    },
    icon: error => {
      return (
        <FontAwesome5
          name="star-of-life"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  }
]

export const signUpFileds = [
  {
    name: "displayName",
    placeholder: "Enter your displayName",
    options: {
      required: "This is required"
    },
    secureTextEntry: false,
    icon: error => {
      return (
        <Ionicons
          name="text"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  },
  {
    name: "email",
    placeholder: "Enter your email",
    options: {
      required: "This is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
      }
    },
    secureTextEntry: false,
    icon: error => {
      return (
        <Entypo
          name="email"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  },
  {
    name: "password",
    placeholder: "Enter your password",
    secureTextEntry: true,
    options: {
      required: "This is required"
    },
    icon: error => {
      return (
        <FontAwesome5
          name="star-of-life"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  },
  {
    name: "repeatPassword",
    placeholder: "Repeat your password",
    secureTextEntry: true,
    options: {
      required: "This is required",
    //   validate: val => {
    //     if (watch("password") != val) {
    //       return "Your passwords do no match"
    //     }
    //   }
    },
    icon: error => {
      return (
        <FontAwesome5
          name="star-of-life"
          size={24}
          color={error && "red"}
          style={{ marginRight: 10 }}
        />
      )
    }
  }
]
