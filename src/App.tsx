import React from "react"
import TreeyProvider from "./components/TreeyProvider"
import UIProvider from "./components/UIProvider"
import { Router } from "@reach/router"
import Header from "./components/Header"
import PageHome from "./pages/Home"
import PageItem from "./pages/Item"
import Page404 from "./pages/404"

const App: React.FC = () => {

  const basepath = window.location.host === "gilleswittenberg.github.io" ? "/treey-react" : "/"

  return (
    <div className="App">
      <Header/>
      <main>
        <TreeyProvider>
          <UIProvider>
            <Router basepath={ basepath }>
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
