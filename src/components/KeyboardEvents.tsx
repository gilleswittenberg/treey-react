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
