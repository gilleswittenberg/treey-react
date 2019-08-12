import React, { useState, useContext, FormEvent } from "react"
import useEscListener from "../hooks/useEscListener"
import TreeyContext from "../contexts/TreeyContext"
import Button from "./Button"

import "../styles/FormAdd.sass"

interface Props {
  parentId: Id
}

const FormAdd: React.FC<Props> = ({ parentId }) => {

  const [isAdding, setIsAdding] = useState(false)
  const [value, setValue] = useState("")
  const { treey } = useContext(TreeyContext)

  const showButton = isAdding === false
  const showForm = !showButton

  const onClick = () => setIsAdding(true)
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (treey == null) return
    await treey.createAndAdd(value, parentId)
    setIsAdding(false)
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
