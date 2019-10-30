import React from "react"
import AlertsProvider from "./components/AlertsProvider"
import TreeyProvider from "./components/TreeyProvider"
import UIProvider from "./components/UIProvider"
import { Router } from "@reach/router"
import basepath from "./utils/basepath"
import Header from "./components/Header"
import PageHome from "./pages/Home"
import PageItem from "./pages/Item"
import Page404 from "./pages/404"


const App: React.FC = () => {

  return (
    <div className="App">
      <Header/>
      <main>
        <AlertsProvider>
          <TreeyProvider>
            <UIProvider>
              <Router basepath={ basepath }>
                <PageHome path="/" />
                <PageItem path="/item/:fullName" />
                <Page404 default />
              </Router>
            </UIProvider>
          </TreeyProvider>
        </AlertsProvider>
      </main>
    </div>
  )
}

export default App
