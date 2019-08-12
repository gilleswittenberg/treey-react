import React from "react"
import TreeyProvider from "./components/TreeyProvider"
import { Router } from "@reach/router"
import Header from "./components/Header"
import PageHome from "./pages/Home"
import PageItem from "./pages/Item"
import Page404 from "./pages/404"

import "./styles/App.sass"

const App: React.FC = () => {

  return (
    <div className="App">
      <Header/>
      <main>
        <TreeyProvider>
          <Router>
            <PageHome path="/" />
            <PageItem path="item/:fullName" />
            <Page404 default />
          </Router>
        </TreeyProvider>
      </main>
    </div>
  )
}

export default App
