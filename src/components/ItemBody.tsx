import React from "react"
import { DragElementWrapper, DragSourceOptions } from "react-dnd"
import { Link } from "@reach/router"
import cs from "classnames"
import ItemData from "./ItemData"
import Button from "./Button"
import basepath from "../utils/basepath"
import { getData, stringifyData } from "../utils/treeItemUtils"

type Props = {
  path: Ids
  item: TreeItem
  drag: DragElementWrapper<DragSourceOptions>
  isDragging: boolean
  onClick: any
  onClickAdd: any
  onClickEdit: any
  onClickDelete: any
}

const ItemBody: React.FC<Props> = ({ path, item, drag, isDragging, onClick, onClickAdd, onClickEdit, onClickDelete }) => {

  const showAddButton = item.relations.length === 0
  const data = getData(item)
  const dataString = stringifyData(data)
  const linkTo = `${ basepath }item/${ item.name }`

  return (
    <div ref={ drag } className={ cs("ItemBody", { showAddButton, isDragging }) }>
      <span onClick={ onClick }>
        <ItemData data={ dataString } />
        <Link to={ linkTo } className="info">ⓘ</Link>
      </span>
      { showAddButton &&
        <Button type="ADD" onClick={ onClickAdd } />
      }
      <Button type="EDIT" onClick={ onClickEdit } />
      <Button type="DELETE" onClick={ onClickDelete } />
    </div>
  )
}

export default ItemBody
