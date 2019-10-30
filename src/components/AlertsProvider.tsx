import React, { ReactNode, useState } from "react"
import AlertsContext from '../contexts/AlertsContext'

type Props = {
  children: ReactNode
}

const AlertsProvider: React.FC<Props> = ({ children }) => {

  const [alerts, setAlerts] = useState<Alerts>([])
  const pushAlerts = (alert: Alert) => setAlerts(alerts.concat(alert))
  const show = (message: string, type?: AlertType) => {
    const alert = { message, type }
    pushAlerts(alert)
  }
  const value = {
    alerts,
    show
  }

  return (
    <AlertsContext.Provider value={ value }>
      { children }
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
