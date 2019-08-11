import React from "react"
import useRoutes from "./hooks/useRoutes"
import TreeyProvider from "./components/TreeyProvider"
import Header from "./components/Header"
import PageHome from "./pages/Home"
import PageItem from "./pages/Item"
import Page404 from "./pages/404"

import "./styles/App.sass"

const App: React.FC = () => {

  const routes = ["/", "/item"]
  const base = document.location.pathname.slice(0, 13) === "/treey-react" ? "/treey-react" : ""

  const [route, switchRoute] = useRoutes(routes, base)
  const showHome = route.isHome()
  const showItem = route.isPage("/item")
  const show404 = route.is404()

  return (
    <div className="App">
      <Header/>
      <main>
        <TreeyProvider>
          { showHome && <PageHome switchRoute={ switchRoute } /> }
          { showItem && <PageItem/> }
          { show404 && <Page404/> }
        </TreeyProvider>
      </main>
    </div>
  )
}

export default App
