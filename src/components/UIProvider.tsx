import React, { useContext, ReactNode } from "react"
import UIContext from '../contexts/UIContext'
import TreeyContext from '../contexts/TreeyContext'
import pruneTree from "../utils/tree/pruneTree"
import flattenTree from "../utils/tree/flattenTree"
import appendAddToSiblings from "../utils/tree/appendAddToSiblings"
import { getId, createPathAdd } from "../utils/treeItemUtils"
import { createFullName } from "treey"
import usePathState from "../hooks/usePathState"
import usePathsState from "../hooks/usePathsState"

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  // shown form
  const [, isShownForm, setShownForm, unsetShownForm] = usePathState()

  // is opened
  const [open, isOpen, setOpen, unsetOpen] = usePathsState()

  // is dragging
  const [, isDragging, setDragging, unsetDragging] = usePathState()

  // is active
  const [active, isActive, setActive, unsetActive] = usePathState()

  const { tree } = useContext(TreeyContext)
  const changeActive = (direction: Direction = "next") => {

    if (tree === undefined) return

    const treeWithAdd = appendAddToSiblings([tree])
    const rootPath = createFullName(getId(tree)!)
    const arr = [rootPath].concat(open)

    const prunedTree = pruneTree(treeWithAdd, arr)
    const flattenedArr = flattenTree(prunedTree)
    // remove root item
    const items = flattenedArr.slice(1) as TreeNodes

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

  const clear = (path: Path) => {
    const pathAdd = createPathAdd(path)
    if (isShownForm(path) || isShownForm(pathAdd)) unsetShownForm()
    if (isActive(path) || isShownForm(pathAdd)) unsetActive()
    if (isDragging(path)) unsetDragging()
    if (isOpen(path)) unsetOpen(path)
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
    setActive,
    changeActive,
    clear
  }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
