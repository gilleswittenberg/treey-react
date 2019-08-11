import React from "react"
import TreeItem, { TreeItems } from "../treey/src/types/TreeItem"
import { Id } from "../treey/src/types/types"
import Item from "./Item"
import FormAdd from "./FormAdd"
import { Treey } from "../hooks/useTreey"

import "../styles/Items.sass"

interface Props {
  parentId: Id
  items: TreeItems
  treey: Treey
  switchRoute: any
}

const Items: React.FC<Props> = ({ parentId, items, treey, switchRoute }) => {

  const showItems = items.length > 0

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item: TreeItem, index: number) => {
              return (
                <li key={ item.name }>
                  <Item parentId={ parentId } index={ index } item={ item } treey={ treey } switchRoute={ switchRoute } />
                </li>
              )
            })
          }
        </ul>
      }
      <FormAdd parentId={ parentId } treey={ treey }/>
    </div>
  )
}

export default Items
