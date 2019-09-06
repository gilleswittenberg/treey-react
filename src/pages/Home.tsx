import React, { useContext } from "react"
import { RouteComponentProps } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import Spinner from "../components/Spinner"
import Tree from "../components/Tree"

import "../styles/Home.sass"

type Props = RouteComponentProps

const PageHome: React.FC<Props> = () => {

  const { tree, treey } = useContext(TreeyContext)
  const showSpinner = tree == null
  const showTree = tree != null && treey != null
  const name = tree != null ? tree.name : ""

  return (
    <div className="Page PageHome">
      { showSpinner &&
        <Spinner/>
      }
      { showTree &&
        <>
          <h1 className="RootItem">{ name }</h1>
          <Tree tree={ tree! } treey={ treey! } />
        </>
      }
    </div>
  )
}

export default PageHome
