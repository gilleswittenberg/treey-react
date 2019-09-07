import React, { useState, useContext, FormEvent } from "react"
import { Link } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import Items from "./Items"
import Button from "./Button"
import last from "../utils/last"

import "../styles/Item.sass"

type Props = {
  parents: Ids
  index: Index
  item: TreeItem
}

const getId = (item: TreeItem) : Id | undefined => item.state.ids && item.state.ids[0]
const getData = (item: TreeItem) : Data => item.state && item.state.data

const Item: React.FC<Props> = ({ parents, index, item }) => {

  const id = getId(item)
  const parentId = last(parents)
  const path = id ? parents.concat(id) : parents
  const data = getData(item)

  const [value, setValue] = useState(data)
  const [isOpened, setIsOpened] = useState(false)
  const { treey } = useContext(TreeyContext)
  const { isShownForm, setShownForm, unsetShownForm } = useContext(UIContext)

  const isEditing = isShownForm(path)
  const showItem = !isEditing
  const showForm = isEditing
  const showItems = id && isOpened

  const linkTo = `/item/${ item.name }`

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
      { showItem &&
        <div className="ItemBody">
          <span onClick={ onClick }>
            <span className="text">
              { data }
            </span>
            <Link to={ linkTo } className="info">ⓘ</Link>
          </span>
          <Button type="EDIT" onClick={ onClickEdit } />
          <Button type="DELETE" onClick={ onClickDelete } />
        </div>
      }
      { showForm &&
        <form onSubmit={ onSubmit }>
          <input type="text" onChange={ onChange } value={ value } autoFocus />
          <Button type="EDIT" />
        </form>
      }
      { id && path && showItems &&
        <Items parents={ path } items={ item.relations } />
      }
    </div>
  )
}

export default Item
