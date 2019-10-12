import React, { useContext, useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import { Link } from "@reach/router"
import cs from "classnames"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import ItemData from "./ItemData"
import Button from "./Button"
import basepath from "../utils/basepath"
import { getId, getData, stringifyData } from "../utils/treeItemUtils"
import defer from "../utils/defer"

type Props = {
  path: Path
  parent: Id
  index: Index
  item: TreeItem
  isOver: boolean
  onClick: () => void
  onClickAdd: () => void
  onClickEdit: () => void
  onClickDelete: () => void
}

const ItemBody: React.FC<Props> = ({ path, parent, index, item, isOver, onClick, onClickAdd, onClickEdit, onClickDelete }) => {

  const id = getId(item)
  const dropId = id
  const { isDragging: isDraggingGlobal, setDragging, unsetDragging, setOpen, isActive: itemIsActive } = useContext(UIContext)
  const { treey } = useContext(TreeyContext)
  const isDraggingUIContext = isDraggingGlobal()
  const isActive = itemIsActive(path)

  const [isHovered, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", parent, index, id, path },
    begin: () => defer(() => setDragging(path)),
    end: () => unsetDragging(),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const hasRelations = item.relations.length > 0
  const showAddButton = !hasRelations
  const showButtons = isHovered && !isDragging && !isDraggingUIContext
  const data = getData(item)
  const dataString = stringifyData(data)
  const linkTo = `${ basepath }item/${ item.name }`

  const [{ isOver: isOverDeep }, drop] = useDrop({
    accept: "item",
    drop: async (item, monitor) => {

      const draggableData = item as DraggableData
      const id = draggableData.id
      const oldParentId = draggableData.parent
      const oldIndex = draggableData.index
      const parentId = dropId
      if (parentId == null) return

      // guard for null treey context
      if (treey == null) return
      await treey.move(id, oldParentId, parentId, oldIndex)
      setOpen(path)
    },
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  })

  const isDisabled = isDragging
  const showDrop = (isOver && !hasRelations) || isOverDeep
  const showDnDPlaceHolderChild = isOverDeep

  return (
    <div className={ cs("ItemBodyWrap", { isActive, isDisabled }) }>
      <div
        ref={ drag }
        className={ cs("ItemBody", { showAddButton, showButtons, showDrop }) }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        >
        <span onClick={ onClick }>
          <ItemData data={ dataString } />
          <Link to={ linkTo } className="info">ⓘ</Link>
        </span>
        { showDrop &&
          <div ref={ drop } className="ItemAddDrop">
            <Button type="ADD" />
          </div>
        }
        { showAddButton &&
          <Button type="ADD" onClick={ onClickAdd } />
        }
        <Button type="EDIT" onClick={ onClickEdit } />
        <Button type="DELETE" onClick={ onClickDelete } />
      </div>
      <div className={ cs("dnd-placeholder", "dnd-placeholder-child", { isShown: showDnDPlaceHolderChild }) }><div></div></div>
    </div>
  )
}

export default ItemBody
