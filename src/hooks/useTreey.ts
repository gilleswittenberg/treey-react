import { useState, useEffect } from "react"
import treey from "treey"
const { treey: { init, read, createAndAdd, update, remove, move } } = treey

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
      const tree = await remove(id, parentId, index)
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
