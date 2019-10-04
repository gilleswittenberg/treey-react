import React, { useContext, useRef, useState } from "react"
import { useDrop } from 'react-dnd'
import TreeyContext from "../contexts/TreeyContext"
import ItemBody from "./ItemBody"
import { getId, getName } from "../utils/treeItemUtils"
import last from "../utils/last"
import cs from "classnames"

import "../styles/ItemDnD.sass"

type Props = {
  parents: Ids
  path: Ids
  index: Index
  item: TreeItem
  onClick: () => void
  onClickAdd: () => void
  onClickEdit: () => void
  onClickDelete: () => void
}

type HoverRegion = "top" | "bottom"

const ItemDnD: React.FC<Props> = ({ parents, path, index, item, onClick, onClickAdd, onClickEdit, onClickDelete }) => {

  const id = getId(item)
  const name = getName(id, parents)

  const { treey } = useContext(TreeyContext)
  const ref = useRef<HTMLDivElement>(null)
  const [hoverRegion, setHoverRegion] = useState<HoverRegion>()

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "item",
    canDrop: (item, monitor) => monitor.getItem().name !== name,
    hover: (item, monitor) => {
      const clientOffset = monitor.getClientOffset()
      const clientRect = ref && ref.current && ref.current.getBoundingClientRect()
      if (clientRect && clientOffset) {
        const itemHeight = 44
        const verticalSpacing = 6
        const h = itemHeight + 2 * verticalSpacing 
        const y = clientOffset.y - clientRect.top
        const newHoverRegion = y <= h / 2 ? "top" : "bottom"
        setHoverRegion(newHoverRegion)
      }
    },
    drop: async (item, monitor) => {

      // guard for nested drop targets
      if (monitor.didDrop()) return

      const draggableData = item as DraggableData
      const id = draggableData.id
      const oldParentId = last(draggableData.parents)
      const oldIndex = draggableData.index
      const parentId = last(parents)
      // add one if hover over bottom
      // substract one if draggable came from before droppable
      const newIndex = index + (hoverRegion === "bottom" ? 1 : 0) - (oldParentId === parentId && oldIndex < index ? 1 : 0)
      // guard for dropped on previous location
      if (oldParentId === parentId && oldIndex === newIndex) return

      // guard for null treey context
      if (treey == null) return
      await treey.move(id, oldParentId, parentId, oldIndex, newIndex)
    },
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
    })
  })

  const showPlaceholder = isOver && canDrop
  const showPrePlaceholder = showPlaceholder && hoverRegion === "top"
  const showPostPlaceholder = showPlaceholder && hoverRegion === "bottom"

  return (
    <div ref={ ref }>
      <div ref={ drop }>
        <div className={ cs("dnd-placeholder", { isShown: showPrePlaceholder }) }><div></div></div>
        <ItemBody
          path={ path }
          index={ index }
          item={ item }
          isOver={ isOver }
          onClick={ onClick }
          onClickAdd={ onClickAdd }
          onClickEdit={ onClickEdit }
          onClickDelete={ onClickDelete }
        />
        <div className={ cs("dnd-placeholder", { isShown: showPostPlaceholder }) }><div></div></div>
      </div>
    </div>
  )
}

export default ItemDnD
