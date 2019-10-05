import React, { useContext } from "react"
import UIContext from "../contexts/UIContext"
import Item from "./Item"
import FormAdd from "./FormAdd"

import "../styles/Items.sass"

type Props = {
  parents: Ids
  items: TreeItems
}

const Items: React.FC<Props> = ({ parents, items }) => {

  const { isDragging } = useContext(UIContext)

  const showItems = items.length > 0
  const isDisabled = isDragging()

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item, index) => (
              <li key={ item.name }>
                <Item parents={ parents } index={ index } item={ item } />
              </li>
            ))
          }
        </ul>
      }
      <FormAdd parents={ parents } isDisabled={ isDisabled } />
    </div>
  )
}

export default Items
