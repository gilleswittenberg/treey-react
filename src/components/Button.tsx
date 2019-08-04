import React from "react"

import "../styles/Button.sass"

interface Props {
  type: "ADD" | "EDIT" | "DELETE"
  onClick?: () => void
}

const Button: React.FC<Props> = ({ type, onClick }) => {
  const className = "Button " + type
  return (
    <button className={ className } onClick={ onClick } title={ type }>{ type }</button>
  )
}

export default Button
