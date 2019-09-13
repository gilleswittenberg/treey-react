import React, { useState, useContext, FormEvent } from "react"
import { Link } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import Items from "./Items"
import Button from "./Button"
import ItemData from "./ItemData"
import { getId, getPath, getData } from "../utils/treeItemUtils"
import last from "../utils/last"
import basepath from "../utils/basepath"
import cs from "classnames"


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

  const [value, setValue] = useState(data)
  const [isOpened, setIsOpened] = useState(false)
  const { treey } = useContext(TreeyContext)
  const { isShownForm, setShownForm, unsetShownForm } = useContext(UIContext)

  const isEditing = isShownForm(path)
  const showItem = isDragging || !isEditing
  const showForm = !isDragging && isEditing
  const showItems = !isDragging && isOpened

  const linkTo = `${ basepath }item/${ item.name }`

  const onClick = () => {
    const selection = window.getSelection()
    if (selection && selection.toString() !== "") return
    setIsOpened(!isOpened)
  }
  const onClickEdit = () => setShownForm(path)
  const onClickDelete = async () => {
    if (treey == null) return
    if (id == null) return
    await treey.remove(id, parentId, index)
  }
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (treey == null) return
    if (id == null) return
    await treey.update(id, value)
    unsetShownForm()
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <div className="Item" onClick={ event => event.stopPropagation() }>
      <div className={ cs("ItemBody", { isHidden: !showItem }) }>
        <span onClick={ onClick }>
          <ItemData data={ data} />
          <Link to={ linkTo } className="info">ⓘ</Link>
        </span>
        <Button type="EDIT" onClick={ onClickEdit } />
        <Button type="DELETE" onClick={ onClickDelete } />
      </div>
      <form onSubmit={ onSubmit } className={ cs({ isHidden: !showForm }) }>
        <input type="text" onChange={ onChange } value={ value } autoFocus />
        <Button type="EDIT" />
      </form>
      <div className={ cs({ isHidden: !showItems }) }>
        <Items parents={ path } items={ item.relations } />
      </div>
    </div>
  )
}

export default Item
