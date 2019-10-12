import { createContext } from "react"

type Value = {
  isShownForm (path: Path) : boolean
  setShownForm (path: Path) : void
  unsetShownForm () : void
  itemIsOpen (path: Path) : boolean
  setIsOpen (path: Path) : void
  unsetIsOpen (path: Path) : void
  isDragging () : boolean
  itemIsDragging (path: Path) : boolean
  setIsDragging (path: Path) : void
  unsetIsDragging () : void
  isActive (path?: Path) : boolean
  setIsActive (direction?: Direction) : void
  activeItem: Path | undefined
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  isShownForm: unimplemented,
  setShownForm: unimplemented,
  unsetShownForm: unimplemented,
  itemIsOpen: unimplemented,
  setIsOpen: unimplemented,
  unsetIsOpen: unimplemented,
  isDragging: unimplemented,
  itemIsDragging: unimplemented,
  setIsDragging: unimplemented,
  unsetIsDragging: unimplemented,
  isActive: unimplemented,
  setIsActive: unimplemented,
  activeItem: undefined
} as Value

const UIContext = createContext(value)

export default UIContext
