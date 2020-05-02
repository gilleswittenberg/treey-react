import React, { ReactNode, useContext } from "react"
import AlertsContext from '../contexts/AlertsContext'
import TreeyContext from '../contexts/TreeyContext'
import useTreey from "../hooks/useTreey"
import { createFullName, Id, Index, Data } from "treey"

type Props = {
  children: ReactNode
}

const abbr = (id: Id) => createFullName(id).slice(0, 7)
const createMessage = (...strs: string[]) => strs.join(" ")

const TreeyProvider: React.FC<Props> = ({ children }) => {

  const [tree, { read, createAndAdd, update, remove, move, init, clone }] = useTreey()
  const { show } = useContext(AlertsContext)

  const actions = {
    read,
    createAndAdd: async (data: Data, parentId: Id) => {
      await createAndAdd(data, parentId)
      show(createMessage("createAndAdd", abbr(parentId)))
    },
    update: async (id: Id, data: Data) => {
      await update(id, data)
      show(createMessage("update", abbr(id)))
    },
    remove: async (id: Id, parentId: Id, index?: Index) => {
      await remove(id, parentId, index)
      show(createMessage("remove", abbr(id), abbr(parentId)))
    },
    move: async (id: Id, oldParentId: Id, parentId: Id, oldIndex?: Index, index?: Index) => {
      await move(id, oldParentId, parentId, oldIndex, index)
      show(createMessage("move", abbr(id), abbr(oldParentId), abbr(parentId)))
    },
    init,
    clone
  }

  const value = { tree, treey: actions }

  return (
    <TreeyContext.Provider value={ value }>
      { children }
    </TreeyContext.Provider>
  )
}

export default TreeyProvider
