import React, { ReactNode, useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"

type Props = {
  children: ReactNode
}

// @TODO: Rename to KeyboardEvents
// @TODO: Remove children props (leaf component)
const KeyboardBindings: React.FC<Props> = ({ children }) => {

  const { isShownForm, setShownForm, setOpen, unsetOpen, active, changeActive } = useContext(UIContext)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (isShownForm()) return
      switch (event.keyCode) {
        // down arrow
        case 40:
          changeActive()
          break
        // up arrow
        case 38:
          changeActive("prev")
          break
        // right arrow
        case 39:
          if (active === undefined) return
          setOpen(active)
          break
        // left arrow
        case 37:
          if (active === undefined) return
          unsetOpen(active)
          break
        // enter
        case 13:
          event.preventDefault()
          if (active === undefined) return
          setShownForm(active)
          break
        // backspace
        case 8:
          // delete
          break
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isShownForm, setShownForm, setOpen, unsetOpen, active, changeActive])

  return (<>{ children }</>)
}

export default KeyboardBindings
