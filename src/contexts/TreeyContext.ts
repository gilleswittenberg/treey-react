import { createContext } from "react"

type Value = {
  tree?: TreeItem
  treey?: Treey
}

const value = {
  tree: undefined,
  treey: undefined
} as Value

const TreeyContext = createContext(value)

export default TreeyContext
