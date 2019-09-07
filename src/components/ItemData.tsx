import React from "react"

type Props = {
  data: Data
}

const ItemData: React.FC<Props> = ({ data }) => {
  const isUrl = /^https?:\/\//.test(data)
  return (
    <span className="ItemData">
      { isUrl ? <a href={ data } onClick={ event => event.stopPropagation() }>{ data }</a> : data }
    </span>
  )
}

export default ItemData
