import React, { useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"
import TreeyContext from "../contexts/TreeyContext"
import { parsePath } from "../utils/treeItemUtils"
import last from "../utils/last"
import { createPathAdd, isPathAdd, getItemFromPath } from "../utils/treeItemUtils"

const KeyboardEvents: React.FC = () => {

  const {
    isShownForm,
    setShownForm,
    unsetShownForm,
    setOpen,
    isOpen,
    unsetOpen,
    active,
    setActive,
    changeActive
  } = useContext(UIContext)

  const { tree, treey } = useContext(TreeyContext)

  useEffect(() => {

    const canOpen = (path: Path) => {
      if (tree == null) return false
      if (isPathAdd(path)) return false
      const item = getItemFromPath(tree, path)
      return item !== undefined && item.relations.length > 0
    }

    const handler = async (event: KeyboardEvent) => {
      if (isShownForm() && event.keyCode !== 27) return
      switch (event.keyCode) {
        // down arrow
        // k (VIM)
        case 40:
        case 75:
          changeActive()
          break
        // up arrow
        // i (VIM)
        case 38:
        case 73:
          changeActive("prev")
          break
        // right arrow
        // l (VIM)
        case 39:
        case 76:
          if (active === undefined) return
          if (isOpen(active) || canOpen(active) === false) return changeActive()
          setOpen(active)
          break
        // left arrow
        // j (VIM)
        case 37:
        case 74:
          if (active === undefined) return
          if (isOpen(active) === false) return changeActive("prev")
          unsetOpen(active)
          break
        // enter
        case 13:
          event.preventDefault()
          if (active === undefined) return
          setShownForm(active)
          break
        // esc
        case 27:
          unsetShownForm()
          break
        // +
        case 187:
          if (event.shiftKey === false) return
          if (active === undefined) return
          event.preventDefault()
          const pathAdd = isPathAdd(active) ? active : createPathAdd(active)
          setShownForm(pathAdd)
          setActive(pathAdd)
          break
        // backspace
        case 8:
          if (treey === null) return
          if (active === undefined) return
          const ids = parsePath(active)
          const id = last(ids)
          if (id === undefined) return
          const parentId = last(ids.slice(0, -1))
          if (parentId === undefined) return
          changeActive("prev")
          unsetOpen(active)
          await treey.remove(id, parentId)
          break
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [
    isShownForm,
    setShownForm,
    unsetShownForm,
    isOpen,
    setOpen,
    unsetOpen,
    active,
    setActive,
    changeActive,
    tree,
    treey
  ])

  return null
}

export default KeyboardEvents
