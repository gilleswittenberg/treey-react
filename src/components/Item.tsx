import React, { useState, FormEvent } from 'react'
import TreeItem from "../treey/src/types/TreeItem"
import { Id, Index } from "../treey/src/types/types"

interface Props {
  parentId: Id,
  index: Index,
  item: TreeItem,
  treey: any
}

const Item: React.FC<Props> = ({ parentId, index, item, treey }) => {

  const data = item.state && item.state.data

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(data)

  const showData = !isEditing
  const showButton = showData
  const showForm = isEditing
  const onClickEdit = () => setIsEditing(true)
  const onClickDelete = async () => {
    const id = item.state.ids && item.state.ids[0]
    await treey.remove(id, parentId, index)
  }
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const id = item.state.ids && item.state.ids[0]
    await treey.update(id, value)
    setIsEditing(false)
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <div className="Item">
      { showData && data }
      { showButton &&
        <>
        <button onClick={ onClickEdit }>Edit</button>
        <button onClick={ onClickDelete }>Delete</button>
        </>
      }
      { showForm &&
        <form onSubmit={ onSubmit }>
          <input type="text" onChange={ onChange } value={ value } />
          <button type="submit">Edit</button>
        </form>
      }
    </div>
  )
}

export default Item
