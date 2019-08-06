import { useState, useEffect } from "react"
import { Data, Id, Index } from "../treey/src/types/types"
import { init, read, createAndAdd, update, remove, move } from "../treey/src/treey"
import TreeItem from "../treey/src/types/TreeItem"

export interface Treey {
  read: (id: Id) => Promise<TreeItem>
  createAndAdd (data: Data, parentId: Id) : void
  update (id: Id, data: Data) : void
  remove (id: Id, parentId: Id, index: Index) : void
  move (id: Id, oldParentId: Id, oldIndex: Index, parentId: Id, index: Index) : void
}

const useTreey = () => {
  const [tree, setTree] = useState()
  useEffect(() => {
    (async () => {
      const tree = await init()
      setTree(tree)
    })()
  }, [])
  const actions: Treey = {
    read: async (id: Id) => {
      return await read(id)
    },
    createAndAdd: async (data: Data, parentId: Id) => {
      const tree = await createAndAdd(data, parentId)
      setTree(tree)
    },
    update: async (id: Id, data: Data) => {
      const tree = await update(id, data)
      setTree(tree)
    },
    remove: async (id: Id, parentId: Id, index: Index) => {
      const tree = await remove(parentId, id, index)
      setTree(tree)
    },
    move: async (id: Id, oldParentId: Id, oldIndex: Index, parentId: Id, index: Index) => {
      const tree = await move(id, oldParentId, oldIndex, parentId, index)
      setTree(tree)
    }
  }
  return [tree, actions]
}

export default useTreey
