import { useEffect } from "react"

const useEscListener = (action: () => void) => {

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        event.preventDefault()
        action()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [action])
}

export default useEscListener
