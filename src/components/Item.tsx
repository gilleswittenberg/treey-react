import React, { useState, FormEvent } from "react"
import TreeItem from "../treey/src/types/TreeItem"
import { Id, Index } from "../treey/src/types/types"
import { Treey } from "../hooks/useTreey"
import useEscListener from "../hooks/useEscListener"
import Items from "./Items"
import Button from "./Button"

import "../styles/Item.sass"

interface Props {
  parentId: Id
  index: Index
  item: TreeItem
  treey: Treey
  switchRoute: any
}

const Item: React.FC<Props> = ({ parentId, index, item, treey, switchRoute }) => {

  const data = item.state && item.state.data
  const id = item.state.ids && item.state.ids[0]

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(data)
  const [isOpened, setIsOpened] = useState(false)

  const showItem = !isEditing
  const showForm = isEditing
  const showItems = id && isOpened

  const onClick = () => setIsOpened(!isOpened)
  const onClickInfo = () => {
    const id = item.state.ids && item.state.ids[0]
    if (id == null) return
    const path = `/item/self/${ id.name }`
    switchRoute(path)
  }
  const onClickEdit = () => setIsEditing(true)
  const onClickDelete = async () => {
    const id = item.state.ids && item.state.ids[0]
    if (id == null) return
    await treey.remove(id, parentId, index)
  }
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const id = item.state.ids && item.state.ids[0]
    if (id == null) return
    await treey.update(id, value)
    setIsEditing(false)
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  useEscListener(() => setIsEditing(false))

  return (
    <div className="Item">
      { showItem &&
        <div className="ItemBody">
          <span onClick={ onClick }>
            { data }
            <button onClick={ onClickInfo }>ⓘ</button>
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
      { id && showItems &&
        <Items parentId={ id } items={ item.relations } treey={ treey } switchRoute={ switchRoute } />
      }
    </div>
  )
}

export default Item
