import React, { useContext } from "react"
import UIContext from "../contexts/UIContext"
import Item from "./Item"
import FormAdd from "./FormAdd"

import "../styles/Items.sass"

type Props = {
  path: Path
  parent: Id
  items: TreeItems
}

const Items: React.FC<Props> = ({ path, parent, items }) => {

  const { isDragging } = useContext(UIContext)

  const showItems = items.length > 0
  const isDisabled = isDragging()

  return (
    <div className="Items">
      { showItems &&
        <ul>
          { items.map((item, index) =>
              <li key={ item.name }>
                <Item path={ path } parent={ parent } index={ index } item={ item } />
              </li>
            )
          }
        </ul>
      }
      <FormAdd path={ path } parent={ parent } isDisabled={ isDisabled } />
    </div>
  )
}

export default Items
