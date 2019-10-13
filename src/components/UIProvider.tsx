import React, { ReactNode, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import useTreey from "../hooks/useTreey"
import pruneTree from "../utils/tree/pruneTree"
import flattenTree from "../utils/tree/flattenTree"
import appendAddToSiblings from "../utils/tree/appendAddToSiblings"
import { getId, getName } from "../utils/treeItemUtils"
import usePathState from "../hooks/usePathState"
import usePathsState from "../hooks/usePathsState"

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  // shown form
  const [, isShownForm, setShownForm, unsetShownForm] = usePathState()

  // @TODO: Move to KeyboardBindings
  useEscListener(unsetShownForm)

  // @TODO: Move to component MouseEvents
  useEffect(() => {
    window.addEventListener("click", unsetShownForm)
    return () => window.removeEventListener("click", unsetShownForm)
  }, [unsetShownForm])

  // is opened
  const [open, isOpen, setOpen, unsetOpen] = usePathsState()

  // is dragging
  const [, isDragging, setDragging, unsetDragging] = usePathState()

  // is active
  const [active, isActive, setActive] = usePathState()
  const [tree] = useTreey()
  const changeActive = (direction: Direction = "next") => {

    if (tree == null) return

    const treeWithAdd = appendAddToSiblings([tree])
    const rootPath = getName(getId(tree), [])
    const arr = open.concat(rootPath)
    const flattenedArr = flattenTree(pruneTree(treeWithAdd, arr))
    // remove root item
    const items = flattenedArr.slice(1)

    const setFirstItemActive = () => {
      const path = items[0].path!
      setActive(path)
    }

    if (isActive() === false) {
      setFirstItemActive()
    } else {
      const index = items.findIndex(item => isActive(item.path))
      if (index === -1) return setFirstItemActive()
      const followingIndex = direction === "next" ? index + 1 : index - 1
      const l = items.length - 1
      const i =
        followingIndex > l ? 0 :
        followingIndex < 0 ? l :
        followingIndex
      const path = items[i].path!
      setActive(path)
    }
  }

  const value = {
    isShownForm,
    setShownForm,
    unsetShownForm,
    isOpen,
    setOpen,
    unsetOpen,
    isDragging,
    setDragging,
    unsetDragging,
    active,
    isActive,
    changeActive
  }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
