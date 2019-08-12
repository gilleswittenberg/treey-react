import React from "react"
import { Link } from "@reach/router"

import "../styles/Header.sass"

const Header: React.SFC = () => {
  const src = process.env.PUBLIC_URL + "/images/logo_64x64.png"
  return (
    <header className="Header">
      <Link to="/">
        <h1><img src={ src } width="32px" height="32px" alt="木" /></h1>
        <h2>treey</h2>
      </Link>
    </header>
  )
}

export default Header
