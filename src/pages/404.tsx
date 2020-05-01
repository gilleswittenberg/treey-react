import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"

import "../styles/Page404.sass"

type Props = RouteComponentProps

const Page404: FC<Props> = () => {
  return (
    <div className="Page Page404">
      <p>404</p>
    </div>
  )
}

export default Page404
