import React, { useState, useEffect } from "react"
import { Treey } from "../hooks/useTreey"
import TreeItem from "../treey/src/types/TreeItem"
import { ItemEventType } from "../treey/src/types/Item"

import "../styles/ItemOverview.sass"

interface Props {
  treey: Treey
}

const ItemOverview: React.FC<Props> = ({ treey }) => {

  const pathElements = document.location.pathname.split("/")
  const l = pathElements.length
  const protocol = pathElements[l - 2]
  const name = pathElements[l - 1]
  const [treeyId] = useState({ protocol, name })

  const [item, setItem] = useState<TreeItem>()

  useEffect(() => {
    (async () => {
      const item = await treey.read(treeyId)
      setItem(item)
    })()
  }, [treey, treeyId])

  const isLoading = item == null
  const showItem = item != null
  const title = item && item.state.ids && item.state.ids[0].name
  const state = item && JSON.stringify(item.state)

  return (
    <div className="ItemOverview">
      { isLoading &&
        <p>is loading&hellip;</p>
      }
      { showItem &&
        <>
          <h1>item UUID: { title }</h1>
          <h2>state</h2>
          <p className="small">{ state }</p>
          <h2>events</h2>
          <ul>
            { item && item.events.map((event, index) => {
                const eventType = ItemEventType[event.type]
                const payload = event.payload ? JSON.stringify(event.payload) : null
                const showPayload = payload != null
                const datetime = String(event.datetime)
                return (
                  <li key={ index }>
                    <strong>{ eventType }</strong><br/>
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
