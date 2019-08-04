import React from "react"

import "../styles/Button.sass"

interface Props {
  type: "ADD" | "EDIT" | "DELETE"
  onClick?: () => void
}

const Button: React.FC<Props> = ({ type, onClick }) => {
  const className = "Button " + type
  const publicUrl = process.env.PUBLIC_URL
  const backgroundImage =
    type === "ADD" ? `url("${ publicUrl }/images/add_64x64.png")` :
    type === "EDIT" ? `url("${ publicUrl }/images/submit_64x64.png")` :
    type === "DELETE" ? `url("${ publicUrl }/images/remove_64x64.png")` :
    ""
  const style = { backgroundImage }
  return (
    <button className={ className } style={ style } onClick={ onClick } title={ type }>{ type }</button>
  )
}

export default Button
