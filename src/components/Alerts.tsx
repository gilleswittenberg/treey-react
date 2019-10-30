import React, { useContext, useState, useRef, useEffect } from "react"
import AlertsContext from "../contexts/AlertsContext"
import Alert from "./Alert"
import last from "../utils/last"

import "../styles/Alerts.sass"

type Timer = number

const Alerts: React.FC = () => {

  const { alerts } = useContext(AlertsContext)
  const alert = last(alerts)
  const [shouldShowAlert, setShouldShowAlert] = useState(false)
  const timer = useRef<Timer>()
  const clearTimer = () => window.clearTimeout(timer.current)
  const t = 3000

  useEffect(() => {
    setShouldShowAlert(true)
    clearTimer()
    timer.current = window.setTimeout(() => setShouldShowAlert(false), t)
    return clearTimer
  }, [alerts])

  const showAlert = alert !== undefined && shouldShowAlert

  return (
    <div className="Alerts">
      { showAlert &&
        <Alert message={ alert!.message } type={ alert!.type } />
      }
    </div>
  )
}

export default Alerts
