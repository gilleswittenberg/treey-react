import React from "react"
import cs from "classnames"

import "../styles/Alert.sass"

type Props = {
  message: string
  type?: AlertType
}

const Alert: React.FC<Props> = ({ message, type = "message" }) => {

  const classNames = {
    Alert,
    isWarning: type === "warning",
    isError: type === "error"
  }

  return (
    <div className={ cs(classNames) }>
      <p>{ message }</p>
    </div>
  )
}

export default Alert
