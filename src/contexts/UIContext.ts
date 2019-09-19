import { createContext } from "react"

type Value = {
  isShownForm (parents: Ids, isAdd?: boolean) : boolean
  setShownForm (parents: Ids, isAdd?: boolean) : void
  unsetShownForm () : void
  itemIsOpen (ids: Ids) : boolean
  setIsOpen (ids: Ids) : void
  unsetIsOpen (ids: Ids) : void
  itemIsDragging (ids: Ids) : boolean
  setIsDragging (ids: Ids) : void
  unsetIsDragging () : void
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  isShownForm: unimplemented,
  setShownForm: unimplemented,
  unsetShownForm: unimplemented,
  itemIsOpen: unimplemented,
  setIsOpen: unimplemented,
  unsetIsOpen: unimplemented,
  itemIsDragging: unimplemented,
  setIsDragging: unimplemented,
  unsetIsDragging: unimplemented
} as Value

const UIContext = createContext(value)

export default UIContext
