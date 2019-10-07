import React, { useContext } from "react"
import Items from "./Items"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import UIContext from "../contexts/UIContext"
import { getId } from "../utils/treeItemUtils"

import "../styles/Tree.sass"

type Props = {
  tree: TreeItem
  treey: Treey
}

const Tree: React.FC<Props> = ({ tree, treey }) => {

  const items = tree && tree.relations
  const id = getId(tree)!
  const parents = [id]

  const { isActive, setIsActive } = useContext(UIContext)
  if (items && !isActive()) {
    setIsActive()
  }

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
