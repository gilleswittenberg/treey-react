import { init, createAndAdd, update, remove, move } from "../treey/src/treey"
import { useState, useEffect } from "react"

const useTreey = () => {
  const [tree, setTree] = useState()
  useEffect(() => {
    (async () => {
      const tree = await init()
      setTree(tree)
    })()
  }, [])
  const actions = {
    createAndAdd: async (data: any, parentId: any) => {
      const tree = await createAndAdd(data, parentId)
      setTree(tree)
    },
    update: async (id: any, data: any) => {
      const tree = await update(id, data)
      setTree(tree)
    },
    remove: async (id: any, parentId: any, index: any) => {
      const tree = await remove(parentId, id, index)
      setTree(tree)
    },
    move: async (id: any, oldParentId: any, oldIndex: any, parentId: any, index: any) => {
      const tree = await move(id, oldParentId, oldIndex, parentId, index)
      setTree(tree)
    }
  }
  return [tree, actions]
}

export default useTreey
