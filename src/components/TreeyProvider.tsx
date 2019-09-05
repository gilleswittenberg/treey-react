import React, { ReactNode } from "react"
import TreeyContext from '../contexts/TreeyContext'
import useTreey from "../hooks/useTreey"

type Props = {
  children: ReactNode
}

const TreeyProvider: React.FC<Props> = ({ children }) => {

  const [tree, treey] = useTreey()
  const value = { tree, treey }

  return (
    <TreeyContext.Provider value={ value }>
      { children }
    </TreeyContext.Provider>
  )
}

export default TreeyProvider
