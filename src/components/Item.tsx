import React, { useState, useContext, FormEvent } from "react"
import { Link } from "@reach/router"
import TreeyContext from "../contexts/TreeyContext"
import useEscListener from "../hooks/useEscListener"
import Items from "./Items"
import Button from "./Button"

import "../styles/Item.sass"

type Props = {
  parentId: Id
  index: Index
  item: TreeItem
}

const getId = (item: TreeItem) : Id | undefined => item.state.ids && item.state.ids[0]

const Item: React.FC<Props> = ({ parentId, index, item }) => {

  const id = getId(item)
  const data = item.state && item.state.data as Data

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(data)
  const [isOpened, setIsOpened] = useState(false)
  const { treey } = useContext(TreeyContext)

  const showItem = !isEditing
  const showForm = isEditing
  const showItems = id && isOpened

  const linkTo = `/item/${ item.name }`

  const onClick = () => setIsOpened(!isOpened)
  const onClickEdit = () => setIsEditing(true)
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
      { id && showItems &&
        <Items parentId={ id } items={ item.relations } />
      }
    </div>
  )
}

export default Item
