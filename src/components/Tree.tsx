import React from "react"
import Items from "./Items"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

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
        <DndProvider backend={ HTML5Backend }>
          <Items parents={ parents } items={ items } />
        </DndProvider>
      }
    </div>
  )
}

export default Tree
