import React, { useContext } from "react"
import TreeyContext from "../contexts/TreeyContext"
import Spinner from "../components/Spinner"
import Tree from "../components/Tree"

interface Props {
  switchRoute: any
}

const PageHome: React.FC<Props> = ({ switchRoute }) => {

  const { tree, treey } = useContext(TreeyContext)
  const showSpinner = tree == null
  const showTree = tree != null
  const name = tree && tree.name

  return (
    <>
      { showSpinner &&
        <Spinner/>
      }
      { showTree &&
        <>
          <h1 className="RootItem">{ name }</h1>
          <Tree tree={ tree! } treey={ treey! } switchRoute={ switchRoute } />
        </>
      }
    </>
  )
}

export default PageHome
