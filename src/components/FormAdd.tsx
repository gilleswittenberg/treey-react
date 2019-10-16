import React, { useContext } from "react"
import TreeyContext from "../contexts/TreeyContext"
import UIContext from "../contexts/UIContext"
import ItemForm from "./ItemForm"
import Button from "./Button"
import { parseData } from "../utils/treeItemUtils"
import cs from "classnames"

import "../styles/FormAdd.sass"

type Props = {
  path: Path
  parent: Id
  isDisabled: boolean
}

const FormAdd: React.FC<Props> = ({ path: parentPath, parent, isDisabled }) => {

  const path = `${ parentPath }/add`
  const { isShownForm, setShownForm, unsetShownForm, isActive: itemIsActive, setActive, setOpen } = useContext(UIContext)
  const { treey } = useContext(TreeyContext)

  const showForm = isShownForm(path)
  const show = isDisabled || !showForm
  const isActive = itemIsActive(path)

  const onClick = () => {
    setShownForm(path)
    setActive(path)
  }

  const submit = async (value: string) => {
    unsetShownForm()
    setOpen(parentPath)
    const trimmedValue = value.trim()
    if (trimmedValue === "") return
    if (treey === null) return
    const data = parseData(trimmedValue)
    await treey.createAndAdd(data, parent)
  }

  return (
    <div className={ cs("FormAdd", { isDisabled, isActive }) } onClick={ event => event.stopPropagation() }>
      { show &&
        <Button onClick={ onClick } type="ADD" />
      }
      { showForm &&
        <ItemForm submit={ submit } />
      }
    </div>
  )
}

export default FormAdd
