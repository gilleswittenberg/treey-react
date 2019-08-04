import React, { useState, FormEvent } from 'react'
import { Id } from "../treey/src/types/types"

interface Props {
  parentId: Id,
  tree: any,
  treey: any
}

const FormAdd: React.FC<Props> = ({ parentId, tree, treey }) => {

  const [isAdding, setIsAdding] = useState(false)
  const [value, setValue] = useState("")

  const showButton = isAdding === false
  const showForm = !showButton

  const onClick = () => setIsAdding(true)
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await treey.createAndAdd(value, parentId)
    setValue("")
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <div className="FormAdd">
      { showButton &&
        <button onClick={ onClick }>Add</button>
      }
      { showForm &&
        <form onSubmit={ onSubmit }>
          <input type="text" onChange={ onChange } value={ value } />
          <button type="submit">Add</button>
        </form>
      }
    </div>
  )
}

export default FormAdd
