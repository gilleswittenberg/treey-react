import React, { useContext, useRef, useState } from "react"
import { useDrop } from 'react-dnd'
import TreeyContext from "../contexts/TreeyContext"
import ItemBody from "./ItemBody"
import cs from "classnames"
import { Id, Index, TreeItem } from "treey"

import "../styles/ItemDnD.sass"

type Props = {
  parent: Id
  path: Path
  index: Index
  item: TreeItem
  onClick: () => void
  onDoubleClick: () => void
  onClickAdd: () => void
  onClickEdit: () => void
  onClickDelete: () => void
}

type HoverRegion = "top" | "bottom"

const ItemDnD: React.FC<Props> = ({ parent, path, index, item, onClick, onDoubleClick, onClickAdd, onClickEdit, onClickDelete }) => {

  const { treey } = useContext(TreeyContext)
  const ref = useRef<HTMLDivElement>(null)
  const [hoverRegion, setHoverRegion] = useState<HoverRegion>()

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "item",
    canDrop: (item, monitor) => monitor.getItem().path !== path,
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
      const oldParentId = draggableData.parent
      const oldIndex = draggableData.index
      // add one if hover over bottom
      // substract one if draggable came from before droppable
      const newIndex = index + (hoverRegion === "bottom" ? 1 : 0) - (oldParentId === parent && oldIndex < index ? 1 : 0)
      // guard for dropped on previous location
      if (oldParentId === parent && oldIndex === newIndex) return

      // guard for null treey context
      if (treey == null) return
      await treey.move(id, oldParentId, parent, oldIndex, newIndex)
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
        <div className={ cs("DnDPlaceholder", { isShown: showPrePlaceholder }) }><div></div></div>
        <ItemBody
          path={ path }
          parent={ parent }
          index={ index }
          item={ item }
          isOver={ isOver }
          onClick={ onClick }
          onDoubleClick={ onDoubleClick }
          onClickAdd={ onClickAdd }
          onClickEdit={ onClickEdit }
          onClickDelete={ onClickDelete }
        />
        <div className={ cs("DnDPlaceholder", { isShown: showPostPlaceholder }) }><div></div></div>
      </div>
    </div>
  )
}

export default ItemDnD
