import React, { useContext, useRef, useState } from "react"
import { useDrag, useDrop } from 'react-dnd'
import TreeyContext from "../contexts/TreeyContext"
import Item from "./Item"
import { getId, getName } from "../utils/treeItemUtils"
import last from "../utils/last"

import "../styles/DnDItem.sass"

type Props = {
  parents: Ids
  index: Index
  item: TreeItem
}

type HoverRegion = "top" | "bottom"

type DraggableData = {
  type: string,
  parents: Ids,
  index: Index,
  id: Id
}

const DnDItem: React.FC<Props> = ({ parents, index, item }) => {

  const id = getId(item)
  const name = getName(id, parents)

  const { treey } = useContext(TreeyContext)
  const ref = useRef<HTMLDivElement>(null)
  const [hoverRegion, setHoverRegion] = useState<HoverRegion>()

  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", parents, index, id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "item",
    canDrop: (item, monitor) => monitor.getItem().name !== name,
    drop: async (item, monitor) => {
      if (monitor.didDrop()) return
      const draggableData = item as DraggableData
      const id = draggableData.id
      const oldParentId = last(draggableData.parents)
      const oldIndex = draggableData.index
      const parentId = last(parents)
      const newIndex = hoverRegion === "top" ? index : index + 1
      if (treey == null) return
      await treey.move(id, oldParentId, oldIndex, parentId, newIndex)
    },
    hover: (item, monitor) => {
      const clientOffset = monitor.getClientOffset()
      const clientRect = ref && ref.current && ref.current.getBoundingClientRect()
      if (clientRect && clientOffset) {
        const h = 44 + 6 // height + bottom margin
        const y = clientOffset.y - clientRect.top
        const hoverRegion = y <= h / 2 ? "top" : "bottom"
        setHoverRegion(hoverRegion)
      }
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
        { showPrePlaceholder &&
          <div className="dnd-placeholder"></div>
        }
        <div ref={ drag }>
          <Item parents={ parents } index={ index } item={ item } isDragging={ isDragging } />
        </div>
        { showPostPlaceholder &&
          <div className="dnd-placeholder"></div>
        }
      </div>
    </div>
  )
}

export default DnDItem
