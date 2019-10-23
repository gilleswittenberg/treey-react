import React, { useContext, useRef, useEffect } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import ItemDnD from "./ItemDnD"
import ItemForm from "./ItemForm"
import Items from "./Items"
import cs from "classnames"
import { isEqual } from "lodash"
import { getId, getData, stringifyData, parseData, createPathAdd } from "../utils/treeItemUtils"

import "../styles/Item.sass"

type Props = {
  path: Path
  parent: Id
  index: Index
  item: TreeItem
}

const Item: React.FC<Props> = ({ path: parentPath, parent, index, item }) => {

  const id = getId(item)!
  const path = `${ parentPath }/${ index }/${ item.name }`
  const pathAdd = createPathAdd(path)
  const data = getData(item)
  const dataString = stringifyData(data)
  const hasRelations = item.relations.length > 0

  const { treey } = useContext(TreeyContext)
  const remove = async () => {
    if (treey == null) return
    if (id == null) return
    await treey.remove(id, parent, index)
  }
  const {
    isShownForm,
    setShownForm,
    unsetShownForm,
    isOpen: itemIsOpen,
    setOpen,
    unsetOpen,
    isDragging: itemIsDragging,
    setActive,
    clear
  } = useContext(UIContext)

  const isOpen = itemIsOpen(path)
  const isEditing = isShownForm(path)
  const isDragging = itemIsDragging(path)
  const showItem = isDragging || !isEditing
  const showForm = !isDragging && isEditing
  const showItems = !isDragging && ((isOpen && hasRelations) || isShownForm(pathAdd))

  const previousPath = useRef(path)
  useEffect(() => {
    const oldPath = previousPath.current
    if (oldPath === path) return
    clear(oldPath)
    const wasOpen = itemIsOpen(oldPath)
    if (wasOpen) setOpen(path)
    return () => clear(path)
  }, [path, clear, id, itemIsOpen, setOpen])

  const onClick = () => {
    setActive(path)
    if (isShownForm(pathAdd)) unsetShownForm()
    const selection = window.getSelection()
    if (selection && selection.toString() !== "") return
    if (!hasRelations) return
    if (!isOpen) return setOpen(path)
    if (isOpen) return unsetOpen(path)
  }
  const onDoubleClick = () => {
    setOpen(path)
    setShownForm(pathAdd)
  }
  const onClickAdd = () => {
    setShownForm(pathAdd)
    setOpen(path)
    setActive(pathAdd)
  }
  const onClickEdit = () => {
    setShownForm(path)
    setActive(path)
  }
  const onClickDelete = async () => {
    await remove()
    unsetOpen(path)
    setActive(parentPath)
  }
  const submit = async (value: string) => {
    unsetShownForm()
    const trimmedValue = value.trim()
    if (trimmedValue === "") return remove()
    const newData = parseData(trimmedValue)
    if (isEqual(data, newData)) return
    if (treey == null) return
    if (id == null) return
    await treey.update(id, newData)
  }

  return (
    <div className="Item" onClick={ event => event.stopPropagation() }>
      <div className={ cs({ isHidden: !showItem }) }>
        <ItemDnD
          parent={ parent }
          path={ path }
          index={ index }
          item={ item }
          onClick={ onClick }
          onDoubleClick={ onDoubleClick }
          onClickAdd={ onClickAdd }
          onClickEdit={ onClickEdit }
          onClickDelete={ onClickDelete }
        />
      </div>
      <div className={ cs("ItemFormWrap", { isHidden: !showForm }) }>
        <ItemForm submit={ submit } initialValue={ dataString } />
      </div>
      <div className={ cs({ isHidden: !showItems }) }>
        <Items parent={ id } path={ path } items={ item.relations } />
      </div>
    </div>
  )
}

export default Item
