import React, { useState, FormEvent } from "react"
import Button from "./Button"

type Props = {
  submit: (value: string) => Promise<void>
  initialValue?: string
}

const ItemForm: React.FC<Props> = ({ submit, initialValue = "" }) => {

  const [value, setValue] = useState(initialValue)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await submit(value)
  }

  const onChange = (event: FormEvent) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" value={ value } onChange={ onChange } ref={ elem => elem && elem.focus() } />
      <Button type="EDIT" />
    </form>
  )
}

export default ItemForm
