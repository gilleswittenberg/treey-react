import React from "react"
import useTreey from "./hooks/useTreey"
import useRoutes from "./hooks/useRoutes"
import Header from "./components/Header"
import Tree from "./components/Tree"
import ItemOverview from "./components/ItemOverview"

import "./styles/App.sass"

const App: React.FC = () => {

  const [tree, treey] = useTreey()
  const isLoading = tree === undefined
  const showPage = !isLoading

  const name = tree && tree.id

  const routes = ["/", "/item"]
  const base = document.location.pathname.slice(0, 13) === "/treey-react" ? "/treey-react" : ""

  const [route, switchRoute] = useRoutes(routes, base)
  const showHome = route.isHome()
  const showItemOverview = route.isPage("/item")
  const show404 = route.is404()

  return (
    <div className="App">
      <Header />
      <main>
      { isLoading &&
        <p>is loading&hellip;</p>
      }
      { showPage &&
        <>
          <h1 className="RootItem"><span>your Root UUID: </span>{ name }</h1>

          { showHome && <Tree tree={ tree } treey={ treey } switchRoute={ switchRoute } /> }
          { showItemOverview && <ItemOverview treey={ treey } /> }
          { show404 && <p>404</p> }
        </>
      }
      </main>
    </div>
  )
}

export default App
