import { createContext } from "react"

type Value = {
  alerts: Alerts
  show (message: string, type?: AlertType) : void
}

const unimplemented = () => { throw new Error ("UIContext not implemented") }

const value = {
  alerts: [],
  show: unimplemented,
} as Value

const AlertsContext = createContext(value)

export default AlertsContext
