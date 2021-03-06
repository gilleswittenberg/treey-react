import { useState, useEffect } from "react"
import treey, { Treey, Id, Index, Data } from "treey"
const { init, read, createAndAdd, update, remove, move, clone } = treey

const useTreey = () => {
  const [tree, setTree] = useState()

  useEffect(() => {

    let isUnmounted = false

    const initialize = async () => {
      const tree = await init()
      if (isUnmounted) return
      setTree(tree)
    }
    initialize()

    return () => {
      isUnmounted = true
    }
  }, [])

  const actions: Treey = {
    init,
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
    remove: async (id: Id, parentId: Id, index?: Index) => {
      const tree = await remove(id, parentId, index)
      setTree(tree)
    },
    move: async (id: Id, oldParentId: Id, parentId: Id, oldIndex?: Index, index?: Index) => {
      const tree = await move(id, oldParentId, parentId, oldIndex, index)
      setTree(tree)
    },
    clone
  }
  return [tree, actions] as const
}

export default useTreey
