import React from "react"

import "../styles/Button.sass"

type ButtonType = "ADD" | "EDIT" | "DELETE"

type Props = {
  type: ButtonType
  onClick?: () => void
  onFocus?: () => void
}

const typeToImageMap = (type: ButtonType) : string => {
  switch (type) {
  case "ADD": return "add_64x64.png"
  case "EDIT": return "submit_64x64.png"
  case "DELETE": return "remove_64x64.png"
  }
}

const Button: React.FC<Props> = ({ type, onClick, onFocus }) => {
  const className = "Button " + type
  const backgroundImage = `url("${ process.env.PUBLIC_URL }/images/${ typeToImageMap(type) }")`
  const style = { backgroundImage }
  return (
    <button className={ className } style={ style } onClick={ onClick } onFocus={ onFocus } title={ type }>{ type }</button>
  )
}

export default Button
