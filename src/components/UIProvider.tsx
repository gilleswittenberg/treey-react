import React, { ReactNode, useState } from "react"
import UIContext from '../contexts/UIContext'
import useEscListener from "../hooks/useEscListener"

type Props = {
  children: ReactNode
}

const UIProvider: React.FC<Props> = ({ children }) => {

  const [shownForm, setShownForm] = useState()
  const value = { shownForm, setShownForm }

  useEscListener(() => setShownForm(null))

  return (
    <UIContext.Provider value={ value }>
      { children }
    </UIContext.Provider>
  )
}

export default UIProvider
