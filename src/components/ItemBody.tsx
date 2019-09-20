import React, { useContext } from "react"
import { useDrag } from 'react-dnd'
import { Link } from "@reach/router"
import cs from "classnames"
import UIContext from "../contexts/UIContext"
import ItemData from "./ItemData"
import Button from "./Button"
import basepath from "../utils/basepath"
import { getId, getData, stringifyData } from "../utils/treeItemUtils"

type Props = {
  path: Ids
  index: Index
  item: TreeItem
  onClick: any
  onClickAdd: any
  onClickEdit: any
  onClickDelete: any
}

const ItemBody: React.FC<Props> = ({ path, index, item, onClick, onClickAdd, onClickEdit, onClickDelete }) => {

  const id = getId(item)
  const parents = path.slice(0, -1)
  const { /*itemIsDragging, */ setIsDragging, unsetIsDragging } = useContext(UIContext)
  //const isDraggingUIContext = itemIsDragging(path)

  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", parents, index, id },
    begin: () => setIsDragging(path),
    end: () => unsetIsDragging(),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const showAddButton = item.relations.length === 0
  const data = getData(item)
  const dataString = stringifyData(data)
  const linkTo = `${ basepath }item/${ item.name }`

  return (
    <div ref={ drag } className={ cs("ItemBody", { showAddButton, isHidden: isDragging }) }>
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
