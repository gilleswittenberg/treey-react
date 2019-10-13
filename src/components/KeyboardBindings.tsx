import React, { ReactNode, useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"

type Props = {
  children: ReactNode
}

// @TODO: Rename to KeyboardEvents
// @TODO: Remove children props (leaf component)
const KeyboardBindings: React.FC<Props> = ({ children }) => {

  const { setOpen, unsetOpen, active, changeActive } = useContext(UIContext)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // @TODO: Use switch
      // up arrow
      if (event.keyCode === 40) {
        changeActive()
      }
      // down arrow
      else if (event.keyCode === 38) {
        changeActive("prev")
      }
      // right arrow
      else if (event.keyCode === 39) {
        if (active === undefined) return
        setOpen(active)
      }
      // left arrow
      else if (event.keyCode === 37) {
        if (active === undefined) return
        unsetOpen(active)
      }
      // enter
      /*
      } else if (event.keyCode === 13) {
        event.preventDefault()
        if (activeItem === undefined) return
        setShownForm(activeItem)
      }
      */
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [changeActive])

  return (<>{ children }</>)
}

export default KeyboardBindings
