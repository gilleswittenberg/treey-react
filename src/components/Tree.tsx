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

  return (
    <div className="Tree">
      { id &&
        <Items parentId={ id } items={ items } />
      }
    </div>
  )
}

export default Tree
