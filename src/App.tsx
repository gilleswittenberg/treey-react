import React from "react"
import TreeyProvider from "./components/TreeyProvider"
import UIProvider from "./components/UIProvider"
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
          <UIProvider>
            <Router>
              <PageHome path="/" />
              <PageItem path="item/:fullName" />
              <Page404 default />
            </Router>
          </UIProvider>
        </TreeyProvider>
      </main>
    </div>
  )
}

export default App
