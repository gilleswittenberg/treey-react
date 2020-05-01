import React, { useContext, useEffect } from "react"
import Items from "./Items"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import UIContext from "../contexts/UIContext"
import KeyboardEvents from "../components/KeyboardEvents"
import MouseEvents from "../components/MouseEvents"
import { getId, createFullName } from "../utils/treeItemUtils"

import "../styles/Tree.sass"

type Props = {
  tree: TreeItem
  treey: Treey
}

const Tree: React.FC<Props> = ({ tree, treey }) => {

  const items = tree.relations
  const id = getId(tree)
  const showTree = id !== undefined
  const parent = id!
  const path = createFullName(id!)

  // set first item active on initialisation
  const { isActive, changeActive } = useContext(UIContext)
  useEffect(() => {
    if (isActive() === false) changeActive()
  }, [isActive, changeActive])

  return (
    <div className="Tree">
      { showTree &&
        <>
          <KeyboardEvents />
          <MouseEvents />
          <DndProvider backend={ HTML5Backend }>
            <Items path={ path } parent={ parent } items={ items } />
          </DndProvider>
        </>
      }
    </div>
  )
}

export default Tree
