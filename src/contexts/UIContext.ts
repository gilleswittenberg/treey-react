import { createContext } from "react"

type Value = {
  isShownForm (path?: Path) : boolean
  setShownForm (path: Path) : void
  unsetShownForm () : void
  isOpen (path: Path) : boolean
  setOpen (path: Path) : void
  unsetOpen (path: Path) : void
  isDragging (path?: Path) : boolean
  setDragging (path: Path) : void
  unsetDragging () : void
  active: Path | undefined
  isActive (path?: Path) : boolean
  setActive (path: Path) : void
  changeActive (direction?: Direction) : void
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  isShownForm: unimplemented,
  setShownForm: unimplemented,
  unsetShownForm: unimplemented,
  isOpen: unimplemented,
  setOpen: unimplemented,
  unsetOpen: unimplemented,
  isDragging: unimplemented,
  setDragging: unimplemented,
  unsetDragging: unimplemented,
  active: undefined,
  isActive: unimplemented,
  setActive: unimplemented,
  changeActive: unimplemented
} as Value

const UIContext = createContext(value)

export default UIContext
