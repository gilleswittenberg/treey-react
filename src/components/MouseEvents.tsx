import React, { useContext, useEffect } from "react"
import UIContext from "../contexts/UIContext"

const MouseEvents: React.FC = () => {

  const {
    unsetShownForm
  } = useContext(UIContext)

  useEffect(() => {
    window.addEventListener("click", unsetShownForm)
    return () => window.removeEventListener("click", unsetShownForm)
  }, [unsetShownForm])

  return null
}

export default MouseEvents
