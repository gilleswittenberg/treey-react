import React, { useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"

const KeyboardEvents: React.FC = () => {

  const {
    isShownForm,
    setShownForm,
    unsetShownForm,
    setOpen,
    unsetOpen,
    active,
    changeActive
  } = useContext(UIContext)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (isShownForm() && event.keyCode !== 27) return
      switch (event.keyCode) {
        // down arrow
        // k (VIM)
        case 40:
        case 75:
          changeActive()
          break
        // up arrow
        // i (VIM)
        case 38:
        case 73:
          changeActive("prev")
          break
        // right arrow
        // l (VIM)
        case 39:
        case 76:
          if (active === undefined) return
          setOpen(active)
          break
        // left arrow
        // j (VIM)
        case 37:
        case 74:
          if (active === undefined) return
          unsetOpen(active)
          break
        // enter
        case 13:
          event.preventDefault()
          if (active === undefined) return
          setShownForm(active)
          break
        // esc
        case 27:
          unsetShownForm()
          break
        // backspace
        case 8:
          // delete
          break
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [
    isShownForm,
    setShownForm,
    unsetShownForm,
    setOpen,
    unsetOpen,
    active,
    changeActive
  ])

  return null
}

export default KeyboardEvents
