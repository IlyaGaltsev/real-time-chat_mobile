import { createContext } from "react"
import { IFirebaseContext } from "../../types"

export const Context = createContext<IFirebaseContext | null>(null)
