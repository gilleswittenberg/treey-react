import React, { useState, FormEvent } from "react"
import { Id } from "../treey/src/types/types"
import { Treey } from "../hooks/useTreey"
import useEscListener from "../hooks/useEscListener"
import Button from "./Button"

import "../styles/FormAdd.sass"

interface Props {
  parentId: Id,
  treey: Treey
}

const FormAdd: React.FC<Props> = ({ parentId, treey }) => {

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

  useEscListener(() => setIsAdding(false))

  return (
    <div className="FormAdd">
      { showButton &&
        <Button onClick={ onClick } type="ADD" />
      }
      { showForm &&
        <form onSubmit={ onSubmit }>
          <input type="text" onChange={ onChange } value={ value } autoFocus />
          <Button type="ADD" />
        </form>
      }
    </div>
  )
}

export default FormAdd
