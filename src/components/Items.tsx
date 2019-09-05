import React from "react"
import Item from "./Item"
import FormAdd from "./FormAdd"

import "../styles/Items.sass"

type Props = {
  parentId: Id
  items: TreeItems
}

const Items: React.FC<Props> = ({ parentId, items }) => {

  const showItems = items.length > 0

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item, index) => {
              return (
                <li key={ item.name }>
                  <Item parentId={ parentId } index={ index } item={ item } />
                </li>
              )
            })
          }
        </ul>
      }
      <FormAdd parentId={ parentId } />
    </div>
  )
}

export default Items
