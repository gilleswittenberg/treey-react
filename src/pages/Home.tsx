import React, { FC, useContext } from "react"
import { RouteComponentProps } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import Spinner from "../components/Spinner"
import Alerts from "../components/Alerts"
import Tree from "../components/Tree"

import "../styles/Home.sass"

type Props = RouteComponentProps

const PageHome: FC<Props> = () => {

  const { tree, treey } = useContext(TreeyContext)
  const showSpinner = tree === undefined
  const showTree = tree !== undefined && treey !== undefined
  const name = tree?.name ?? ""

  return (
    <div className="Page PageHome">
      { showSpinner &&
        <Spinner/>
      }
      { showTree &&
        <>
          <h1 className="RootItem">{ name }</h1>
          <Alerts />
          <Tree tree={ tree! } treey={ treey! } />
        </>
      }
    </div>
  )
}

export default PageHome
