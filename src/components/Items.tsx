import React from "react"
import TreeItem, { TreeItems } from "../treey/src/types/TreeItem"
import { Id } from "../treey/src/types/types"
import Item from "./Item"
import FormAdd from "./FormAdd"
import { Treey } from "../hooks/useTreey"

interface Props {
  parentId: Id,
  items: TreeItems,
  treey: Treey
}

const Items: React.FC<Props> = ({ parentId, items, treey }) => {

  const showItems = items.length > 0

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item: TreeItem, index: number) => {
              const name = item.state.ids && item.state.ids[0].name
              return (
                <li key={ name }>
                  <Item parentId={ parentId } index={ index } item={ item } treey={ treey } />
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
