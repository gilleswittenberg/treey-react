import React, { ReactNode, useState, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"
import treey from "treey"

const { utils: { createFullName } } = treey

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  const [shownForm, set] = useState()
  const createPath = (parents: Ids, isAdd = false) => {
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

  const value = { isShownForm, setShownForm, unsetShownForm }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
