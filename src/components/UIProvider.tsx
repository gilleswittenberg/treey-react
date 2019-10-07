import React, { ReactNode, useState, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import treey from "treey"
import useTreey from "../hooks/useTreey"
import pruneTree from "../utils/tree/pruneTree"
import flattenTree from "../utils/tree/flattenTree"
import { getId, getName } from "../utils/treeItemUtils"

const { utils: { createFullName } } = treey

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  // shown form

  const [shownForm, set] = useState<Path>()
  const createPath = (parents: Ids, isAdd = false) : Path => {
    const arr = parents.map(id => createFullName(id))
    return (isAdd ? arr.concat("add") : arr).join("/")
  }
  const isShownForm = (parents: Ids, isAdd = false) => shownForm === createPath(parents, isAdd)
  const setShownForm = (parents: Ids, isAdd = false) => set(createPath(parents, isAdd))
  const setShownFormPath = (path: Path) => set(path)
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
  const itemIsOpen = (ids: Ids) => {
    const path = createPath(ids)
    return isOpen.includes(path)
  }
  const setIsOpen = (ids: Ids) => {
    if (itemIsOpen(ids)) return
    const path = createPath(ids)
    setStateIsOpen(isOpen.concat(path))
  }
  const unsetIsOpen = (ids: Ids) => {
    const path = createPath(ids)
    setStateIsOpen(isOpen.filter(i => i !== path))
  }

  // is dragging

  const [isDragging, setStateIsDragging] = useState<Path>()
  const anyItemIsDragging = () => isDragging !== undefined
  const itemIsDragging = (ids: Ids) => isDragging === createPath(ids)
  const setIsDragging = (ids: Ids) => setStateIsDragging(createPath(ids))
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
      const ids = [getId(root)!, getId(items[0])!]
      setStateIsActive(createPath(ids))
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
      const ids = [getId(root)!, getId(items[i])!]
      setStateIsActive(createPath(ids))
    }
  }
  const itemIsActive = (ids?: Ids) => {
    if (ids === undefined) return isActive !== undefined
    return isActive === createPath(ids)
  }

  const value = {
    isShownForm,
    setShownForm,
    setShownFormPath,
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
