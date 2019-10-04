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
  const showFormAdd = !isDragging()

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
      { showFormAdd &&
        <FormAdd parents={ parents } />
      }
    </div>
  )
}

export default Items
