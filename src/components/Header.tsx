import React from "react"

import "../styles/Header.sass"

const Header: React.SFC = () => {
  return (
    <header className="Header">
      <h1><img src="/images/logo_64x64.png" width="32px" height="32px" /></h1>
      <h2>treey</h2>
    </header>
  )
}

export default Header
