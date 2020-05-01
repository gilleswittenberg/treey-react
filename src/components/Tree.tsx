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

  // @TODO: Why can tree be undefined?
  const hasTree = tree !== undefined
  const items = hasTree ? tree.relations : undefined
  const id = hasTree ? getId(tree)! : undefined
  const parent = id
  const path = hasTree ? createFullName(id!) : undefined

  // set first item active
  const { isActive, changeActive } = useContext(UIContext)
  useEffect(() => {
    if (hasTree && isActive() === false) changeActive()
  }, [hasTree, isActive, changeActive])


  return (
    <div className="Tree">
      { hasTree &&
        <>
          <KeyboardEvents />
          <MouseEvents />
          <DndProvider backend={ HTML5Backend }>
            <Items path={ path! } parent={ parent! } items={ items! } />
          </DndProvider>
        </>
      }
    </div>
  )
}

export default Tree
