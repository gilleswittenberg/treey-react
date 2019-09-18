import React, { useContext } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import ItemForm from "./ItemForm"
import Button from "./Button"
import last from "../utils/last"
import { parseData } from "../utils/treeItemUtils"

import "../styles/FormAdd.sass"

type Props = {
  parents: Ids
}

const FormAdd: React.FC<Props> = ({ parents }) => {

  const { isShownForm, setShownForm, unsetShownForm } = useContext(UIContext)
  const { treey } = useContext(TreeyContext)

  const showForm = isShownForm(parents, true)
  const showButton = !showForm

  const onClick = () => {
    setShownForm(parents, true)
  }

  const submit = async (value: string) => {
    unsetShownForm()
    const trimmedValue = value.trim()
    if (trimmedValue === "") return
    if (treey === null) return
    const parentId = last(parents)
    if (parentId === undefined) return
    const data = parseData(trimmedValue)
    await treey.createAndAdd(data, parentId)
  }

  return (
    <div className="FormAdd" onClick={ event => event.stopPropagation() }>
      { showButton &&
        <Button onClick={ onClick } type="ADD" />
      }
      { showForm &&
        <ItemForm submit={ submit } />
      }
    </div>
  )
}

export default FormAdd
