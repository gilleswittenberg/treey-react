import React from "react"
import useTreey from "./hooks/useTreey"
import Header from "./components/Header"
import Items from "./components/Items"

import "./styles/App.sass"

const App: React.FC = () => {

  const [tree, treey] = useTreey()
  const isLoading = tree === undefined
  const hasTree = !isLoading

  const name = tree && tree.id
  const items = tree && tree.relations
  const id = tree && tree.state.ids && tree.state.ids[0]

  return (
    <div className="App">
      <Header />
      <main>
      { isLoading &&
        <p>is loading&hellip;</p>
      }
      { hasTree &&
        <>
          <h1 className="RootItem">{ name } </h1>
          <div className="ItemsWrap">
            <Items parentId={ id } items={ items } treey={ treey } />
          </div>
        </>
      }
      </main>
    </div>
  )
}

export default App
