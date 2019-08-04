import React from 'react'
import useTreey from "./hooks/useTreey"
import Items from "./components/Items"

import './App.css'

const App: React.FC = () => {

  const [tree, treey] = useTreey()
  const isLoading = tree === undefined
  const hasTree = !isLoading

  const name = tree && tree.id
  const items = tree && tree.relations
  const id = tree && tree.state.ids && tree.state.ids[0]

  return (
    <div className="App">
      <header className="App-header">
        <h1>木</h1>
        <h2>treey</h2>
      </header>
      <main>
      { isLoading &&
        <p>is loading&hellip;</p>
      }
      { hasTree &&
        <>
          <h1>{ name } </h1>
          <Items parentId={ id } items={ items } treey={ treey } />
        </>
      }
      </main>
    </div>
  )
}

export default App
