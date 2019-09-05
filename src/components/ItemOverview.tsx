import React, { useState, useContext, useEffect } from "react"
import TreeyContext from "../contexts/TreeyContext"
import treey from "treey"

import "../styles/ItemOverview.sass"

const { utils: { parseFullName } } = treey


interface Props {
  fullName: string
}

const ItemOverview: React.FC<Props> = ({ fullName }) => {

  const [item, setItem] = useState<TreeItem>()
  const [notFound, setNotFound] = useState(false)
  const [invalidFullName, setInvalidFullName] = useState(false)
  const { treey } = useContext(TreeyContext)

  useEffect(() => {
    if (treey == null) return
    const id = parseFullName(fullName)
    if (id == null) {
      setInvalidFullName(true)
      return
    }
    (async () => {
      const item = await treey.read(id)
      item !== undefined ? setItem(item) : setNotFound(true)
    })()
  }, [treey, fullName])

  const isLoading = notFound === false && invalidFullName === false && item == null
  const showItem = item != null
  const itemName = item && item.name
  const state = item && JSON.stringify(item.state)

  return (
    <div className="ItemOverview">
      { isLoading &&
        <p>is loading&hellip;</p>
      }
      { invalidFullName &&
        <p>{ fullName } is not valid</p>
      }
      { notFound &&
        <p>{ fullName } not found</p>
      }
      { showItem &&
        <>
          <h1>{ itemName }</h1>
          <h2>state</h2>
          <p className="small">{ state }</p>
          <h2>events</h2>
          <ul>
            { item && item.events.map((event: ItemEvent, index: number) => {
                const payload = event.payload ? JSON.stringify(event.payload) : null
                const showPayload = payload != null
                const datetime = String(event.datetime)
                return (
                  <li key={ index }>
                    <strong>{ event.type }</strong><br/>
                    { showPayload && <><span className="small">{ payload }</span><br/></> }
                    { datetime }
                  </li>
                )
              })
            }
          </ul>
        </>
      }
    </div>
  )
}

export default ItemOverview
