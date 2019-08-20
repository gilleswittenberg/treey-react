import { createContext } from "react"
import { Treey } from "../hooks/useTreey"

interface Value {
  tree: TreeItem | null
  treey: Treey | null
}

const value = {
  tree: null,
  treey: null
} as Value

const TreeyContext = createContext(value)

export default TreeyContext
