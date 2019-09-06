import { createContext } from "react"

type Value = {
  shownForm: string | null
  setShownForm: any
}

const value = {
  shownForm: null,
  setShownForm: null
} as Value

const UIContext = createContext(value)

export default UIContext
