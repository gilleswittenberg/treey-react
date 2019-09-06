import React from "react"
import { RouteComponentProps } from "@reach/router"

import "../styles/Page404.sass"

type Props = RouteComponentProps

const Page404: React.SFC<Props> = () => {
  return (
    <div className="Page Page404">
      <p>404</p>
    </div>
  )
}

export default Page404
