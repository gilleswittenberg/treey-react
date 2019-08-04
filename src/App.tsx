import React from 'react'
import useTreey from "./hooks/useTreey"
import TreeItem from "./treey/src/types/TreeItem"
import Item from "./components/Item"
import FormAdd from "./components/FormAdd"

import './App.css'

const App: React.FC = () => {

  const [tree, treey] = useTreey()
  const isLoading = tree === undefined
  const hasTree = !isLoading

  return (
    <div className="App">
      <header className="App-header">
        <h1>木</h1>
        <h2>treey</h2>
      </header>
      <main>
      { isLoading && <p>is loading...</p> }
      { hasTree &&
        <>
          <h1>{ tree.id } </h1>
          <ul>
            { tree.relations.map((treeItem: TreeItem, index: number) => {
              const name = treeItem.state.ids && treeItem.state.ids[0].name
              return (
                <li key={ name }>
                  <Item parentId={ tree.id } index={ index } item={ treeItem } treey={ treey } />
                </li>
              )
            }) }
          </ul>
          <FormAdd parentId={ tree.state.ids[0] } tree={ tree } treey={ treey } />
        </>
      }
      </main>
    </div>
  )
}

export default App
