import React from "react"
import { Treey } from "../hooks/useTreey"
import TreeItem from "../treey/src/types/TreeItem"
import Items from "./Items"

import "../styles/Tree.sass"

interface Props {
  tree: TreeItem
  treey: Treey
  switchRoute: any
}

const Tree: React.FC<Props> = ({ tree, treey, switchRoute }) => {

  const items = tree && tree.relations
  const id = tree && tree.state.ids && tree.state.ids[0]

  return (
    <div className="Tree">
      { id &&
        <Items parentId={ id } items={ items } treey={ treey } switchRoute={ switchRoute } />
      }
    </div>
  )
}

export default Tree
