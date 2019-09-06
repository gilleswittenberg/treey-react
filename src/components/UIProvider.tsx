import React, { ReactNode, useState, useEffect } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  const [shownForm, setShownForm] = useState()
  const closeForms = () => setShownForm(null)

  useEscListener(closeForms)

  useEffect(() => {
    window.addEventListener("click", closeForms)
    return () => window.removeEventListener("click", closeForms)
  }, [])

  const value = { shownForm, setShownForm }

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
