import React, { ReactNode, useState, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import useTreey from "../hooks/useTreey"
import pruneTree from "../utils/tree/pruneTree"
import flattenTree from "../utils/tree/flattenTree"
import { getId, getName } from "../utils/treeItemUtils"

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  // shown form

  const [shownForm, set] = useState<Path>()
  const isShownForm = (path: Path) => shownForm === path
  const setShownForm = (path: Path) => set(path)
  const unsetShownForm = () => set(undefined)

  // @TODO: Move to KeyboardBindings
  useEscListener(unsetShownForm)

  // @TODO: Move to component MouseEvents
  useEffect(() => {
    window.addEventListener("click", unsetShownForm)
    return () => window.removeEventListener("click", unsetShownForm)
  }, [])

  // is opened

  const [isOpen, setStateIsOpen] = useState<Paths>([])
  const itemIsOpen = (path: Path) => {
    return isOpen.includes(path)
  }
  const setIsOpen = (path: Path) => {
    if (itemIsOpen(path)) return
    setStateIsOpen(isOpen.concat(path))
  }
  const unsetIsOpen = (path: Path) => {
    setStateIsOpen(isOpen.filter(i => i !== path))
  }

  // is dragging

  const [isDragging, setStateIsDragging] = useState<Path>()
  const anyItemIsDragging = () => isDragging !== undefined
  const itemIsDragging = (path: Path) => isDragging === path
  const setIsDragging = (path: Path) => setStateIsDragging(path)
  const unsetIsDragging = () => setStateIsDragging(undefined)

  // is active

  const [isActive, setStateIsActive] = useState<Path>()
  const [tree] = useTreey()
  const setIsActive = (direction: Direction = "next") => {
    if (!tree) return

    const arr = isOpen.concat(getName(getId(tree), []))
    const flattenedArr = flattenTree(pruneTree([tree as TreeItem], arr))
    const root = flattenedArr[0]
    const items = flattenedArr.slice(1)

    const setFirstItemActive = () => {
      const path = `${ getId(root)! }/${ getId(items[0])! }`
      setStateIsActive(path)
    }

    if (isActive === undefined) {
      setFirstItemActive()
    } else {
      const index = items.findIndex(item => item.path === isActive)
      if (index === -1) return setFirstItemActive()
      const followingIndex = direction === "next" ? index + 1 : index - 1
      const l = items.length - 1
      const i =
        followingIndex > l ? 0 :
        followingIndex < 0 ? l :
        followingIndex
      const path = `${ getId(root)! }/${ getId(items[i])! }`
      setStateIsActive(path)
    }
  }
  const itemIsActive = (path?: Path) => {
    if (path === undefined) return isActive !== undefined
    return isActive === path
  }

  const value = {
    isShownForm,
    setShownForm,
    unsetShownForm,
    itemIsOpen,
    setIsOpen,
    unsetIsOpen,
    isDragging: anyItemIsDragging,
    itemIsDragging,
    setIsDragging,
    unsetIsDragging,
    isActive: itemIsActive,
    setIsActive,
    activeItem: isActive
  }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
