import React, { useState, useContext, FormEvent } from "react"
import { Link } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import Items from "./Items"
import Button from "./Button"
import ItemData from "./ItemData"
import { getId, getPath, getData, stringifyData, parseData } from "../utils/treeItemUtils"
import last from "../utils/last"
import basepath from "../utils/basepath"
import cs from "classnames"
import { isEqual } from "lodash"

import "../styles/Item.sass"

type Props = {
  parents: Ids
  index: Index
  item: TreeItem
  isDragging: boolean
}

const Item: React.FC<Props> = ({ parents, index, item, isDragging }) => {

  const id = getId(item)
  const parentId = last(parents)
  const path = getPath(id, parents)
  const data = getData(item)
  const dataString = stringifyData(data)
  const hasRelations = item.relations.length > 0

  const [value, setValue] = useState(dataString)
  const [isOpened, setIsOpened] = useState(false)
  const { treey } = useContext(TreeyContext)
  const remove = async () => {
    if (treey == null) return
    if (id == null) return
    await treey.remove(id, parentId, index)
  }
  const { isShownForm, setShownForm, unsetShownForm } = useContext(UIContext)

  const isEditing = isShownForm(path)
  const showItem = isDragging || !isEditing
  const showForm = !isDragging && isEditing
  const showItems = !isDragging && ((isOpened && hasRelations) || isShownForm(path, true))
  const showAddButton = !hasRelations

  const linkTo = `${ basepath }item/${ item.name }`

  const onClick = () => {
    if (isShownForm(path, true)) unsetShownForm()
    const selection = window.getSelection()
    if (selection && selection.toString() !== "") return
    if (!hasRelations) return
    setIsOpened(!isOpened)
  }
  const onClickAdd = () => {
    setShownForm(path, true)
    setIsOpened(true)
  }
  const onClickEdit = () => setShownForm(path)
  const onClickDelete = remove
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    unsetShownForm()
    const trimmedValue = value.trim()
    if (trimmedValue === "") return remove()
    const newData = parseData(trimmedValue)
    if (isEqual(data, newData)) return
    if (treey == null) return
    if (id == null) return
    await treey.update(id, newData)
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <div className="Item" onClick={ event => event.stopPropagation() }>
      <div className={ cs("ItemBody", { isHidden: !showItem, showAddButton }) }>
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
      <form onSubmit={ onSubmit } className={ cs({ isHidden: !showForm }) }>
        <input type="text" value={ value } onChange={ onChange } ref={ elem => elem && elem.focus() } />
        <Button type="EDIT" />
      </form>
      <div className={ cs({ isHidden: !showItems }) }>
        <Items parents={ path } items={ item.relations } />
      </div>
    </div>
  )
}

export default Item
