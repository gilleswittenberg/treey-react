import React from "react"
import { RouteComponentProps } from "@reach/router"
import ItemOverview from "../components/ItemOverview"

type Props = RouteComponentProps & {
  fullName?: string
}

const PageItem: React.SFC<Props> = ({ fullName }) => {
  return (
    <div className="Page PageItem">
      <ItemOverview fullName={ fullName || "" } />
    </div>
  )
}

export default PageItem
