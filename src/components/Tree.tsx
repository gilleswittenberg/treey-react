import React from "react"
import Items from "./Items"

import "../styles/Tree.sass"

type Props = {
  tree: TreeItem
  treey: Treey
}

const Tree: React.FC<Props> = ({ tree, treey }) => {

  const items = tree && tree.relations
  const id = tree && tree.state.ids && tree.state.ids[0]
  const parents = [id]

  return (
    <div className="Tree">
      { id &&
        <Items parents={ parents } items={ items } />
      }
    </div>
  )
}

export default Tree
