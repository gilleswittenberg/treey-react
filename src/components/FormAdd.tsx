import React, { useState, useContext, FormEvent } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import Button from "./Button"
import last from "../utils/last"
import { parseData } from "../utils/treeItemUtils"

import "../styles/FormAdd.sass"

type Props = {
  parents: Ids
}

const FormAdd: React.FC<Props> = ({ parents }) => {

  const [value, setValue] = useState("")
  const clearValue = () => setValue("")
  const { treey } = useContext(TreeyContext)
  const { isShownForm, setShownForm, unsetShownForm } = useContext(UIContext)

  const showForm = isShownForm(parents, true)
  const showButton = !showForm

  const onClick = () => {
    clearValue()
    setShownForm(parents, true)
  }
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    unsetShownForm()
    const trimmedValue = value.trim()
    if (trimmedValue === "") return
    if (treey === null) return
    const parentId = last(parents)
    if (parentId === undefined) return
    const data = parseData(trimmedValue)
    await treey.createAndAdd(data, parentId)
    clearValue()
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <div className="FormAdd" onClick={ event => event.stopPropagation() }>
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
