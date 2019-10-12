import React, { ReactNode, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import useTreey from "../hooks/useTreey"
import pruneTree from "../utils/tree/pruneTree"
import flattenTree from "../utils/tree/flattenTree"
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
  const [isOpenPaths, isOpen, setOpen, unsetOpen] = usePathsState()

  // is dragging
  const [, isDragging, setDragging, unsetDragging] = usePathState()

  // is active
  const [isActivePath, isActive, setActive] = usePathState()
  const [tree] = useTreey()
  const changeActive = (direction: Direction = "next") => {
    if (!tree) return

    const arr = isOpenPaths.concat(getName(getId(tree), []))
    const flattenedArr = flattenTree(pruneTree([tree as TreeItem], arr))
    const root = flattenedArr[0]
    const items = flattenedArr.slice(1)

    const setFirstItemActive = () => {
      const path = getName(getId(items[0])!, [getId(root)!])
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
      const path = getName(getId(items[i])!, [getId(root)!])
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
    isActivePath,
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
