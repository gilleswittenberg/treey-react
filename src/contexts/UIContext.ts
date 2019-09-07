import { createContext } from "react"

type Value = {
  isShownForm (parents: Ids, isAdd?: boolean) : boolean
  setShownForm (parents: Ids, isAdd?: boolean) : void
  unsetShownForm () : void
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  isShownForm: unimplemented,
  setShownForm: unimplemented,
  unsetShownForm: unimplemented
} as Value

const UIContext = createContext(value)

export default UIContext