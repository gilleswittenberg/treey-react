import React, { ReactNode, useState, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import treey from "treey"

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
  const unsetShownForm = () => set(undefined)

  useEscListener(unsetShownForm)

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
    unsetIsDragging
  }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
