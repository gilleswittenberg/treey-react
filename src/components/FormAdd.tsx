import React, { useState, useContext, FormEvent } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import Button from "./Button"
import last from "../utils/last"

import "../styles/FormAdd.sass"

type Props = {
  parents: Ids
}

const FormAdd: React.FC<Props> = ({ parents }) => {

  const parentId = last(parents)
  const pathString = parents.map(i => i.name).join("/") + "/add"
  const [value, setValue] = useState("")
  const { treey } = useContext(TreeyContext)
  const { shownForm, setShownForm } = useContext(UIContext)

  const showForm = shownForm === pathString
  const showButton = !showForm

  const onClick = () => setShownForm(pathString)
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (treey == null) return
    await treey.createAndAdd(value, parentId)
    setShownForm(null)
    setValue("")
  }
  const onChange = (event: FormEvent) => {
    const value = (event.target as HTMLInputElement).value
    setValue(value)
  }

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
