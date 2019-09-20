import React from "react"
import ItemDrop from "./ItemDrop"
import FormAdd from "./FormAdd"

import "../styles/Items.sass"

type Props = {
  parents: Ids
  items: TreeItems
}

const Items: React.FC<Props> = ({ parents, items }) => {

  const showItems = items.length > 0

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item, index) => (
              <li key={ item.name }>
                <ItemDrop parents={ parents } index={ index } item={ item } />
              </li>
            ))
          }
        </ul>
      }
      <FormAdd parents={ parents } />
    </div>
  )
}

export default Items
