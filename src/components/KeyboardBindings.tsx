import React, { ReactNode, useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"

type Props = {
  children: ReactNode
}

// @TODO: Rename to KeyboardEvents
// @TODO: Remove children props (leaf component)
const KeyboardBindings: React.FC<Props> = ({ children }) => {

  const { setIsActive, activeItem, setShownForm } = useContext(UIContext)

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // up arrow
      if (event.keyCode === 40) {
        event.preventDefault()
        setIsActive()
      // down arrow
      } else if (event.keyCode === 38) {
        event.preventDefault()
        setIsActive("prev")
      // enter
      } else if (event.keyCode === 13) {
        event.preventDefault()
        if (activeItem === undefined) return
        setShownForm(activeItem)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [setIsActive, setShownForm, activeItem])

  return (<>{ children }</>)
}

export default KeyboardBindings
