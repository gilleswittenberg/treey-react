import React, { useContext } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import ItemDnD from "./ItemDnD"
import ItemForm from "./ItemForm"
import Items from "./Items"
import { getId, getPath, getData, stringifyData, parseData } from "../utils/treeItemUtils"
import last from "../utils/last"
import cs from "classnames"
import { isEqual } from "lodash"

import "../styles/Item.sass"

type Props = {
  parents: Ids
  index: Index
  item: TreeItem
}

const Item: React.FC<Props> = ({ parents, index, item }) => {

  const id = getId(item)
  const parentId = last(parents)
  const path = getPath(id, parents)
  const data = getData(item)
  const dataString = stringifyData(data)
  const hasRelations = item.relations.length > 0

  const { treey } = useContext(TreeyContext)
  const remove = async () => {
    if (treey == null) return
    if (id == null) return
    await treey.remove(id, parentId, index)
  }
  const { isShownForm, setShownForm, unsetShownForm, itemIsOpen, setIsOpen, unsetIsOpen, itemIsDragging } = useContext(UIContext)

  const isOpen = itemIsOpen(path)
  const isEditing = isShownForm(path)
  const isDragging = itemIsDragging(path)
  const showItem = isDragging || !isEditing
  const showForm = !isDragging && isEditing
  const showItems = !isDragging && ((isOpen && hasRelations) || isShownForm(path, true))

  const onClick = () => {
    if (isShownForm(path, true)) unsetShownForm()
    const selection = window.getSelection()
    if (selection && selection.toString() !== "") return
    if (!hasRelations) return
    if (!isOpen) return setIsOpen(path)
    if (isOpen) return unsetIsOpen(path)
  }
  const onClickAdd = () => {
    setShownForm(path, true)
    setIsOpen(path)
  }
  const onClickEdit = () => setShownForm(path)
  const onClickDelete = () => {
    remove()
    unsetIsOpen(path)
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
    <div className={ cs("Item") } onClick={ event => event.stopPropagation() }>
      <div className={ cs({ isHidden: !showItem }) }>
        <ItemDnD
          parents={ parents }
          path={ path }
          index={ index }
          item={ item }
          onClick={ onClick }
          onClickAdd={ onClickAdd }
          onClickEdit={ onClickEdit }
          onClickDelete={ onClickDelete }
        />
      </div>
      <div className={ cs("ItemFormWrap", { isHidden: !showForm }) }>
        <ItemForm submit={ submit } initialValue={ dataString } />
      </div>
      <div className={ cs({ isHidden: !showItems }) }>
        <Items parents={ path } items={ item.relations } />
      </div>
    </div>
  )
}

export default Item
