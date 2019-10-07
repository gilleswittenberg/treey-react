import { createContext } from "react"

type Value = {
  isShownForm (parents: Ids, isAdd?: boolean) : boolean
  setShownForm (parents: Ids, isAdd?: boolean) : void
  setShownFormPath (path: Path) : void
  unsetShownForm () : void
  itemIsOpen (ids: Ids) : boolean
  setIsOpen (ids: Ids) : void
  unsetIsOpen (ids: Ids) : void
  isDragging () : boolean
  itemIsDragging (ids: Ids) : boolean
  setIsDragging (ids: Ids) : void
  unsetIsDragging () : void
  isActive (ids?: Ids) : boolean
  setIsActive (direction?: Direction) : void
  activeItem: Path | undefined
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  isShownForm: unimplemented,
  setShownForm: unimplemented,
  setShownFormPath: unimplemented,
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
