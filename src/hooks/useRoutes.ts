import { useState, useEffect } from 'react'

type Route = string
type OptionalRoute = Route | undefined
type Routes = Route[]
type Base = string
type Path = string

type RoutesObject = {
  route: () => OptionalRoute,
  isHome: () => boolean,
  is404: () => boolean,
  isPage: (arg0: Route) => boolean
}
export type SwitchRoute = (arg0: Route) => void

const d = "/"
const path = (base: Base, route: Route) : Path => base + route

const pathname = document.location.pathname

const useRoutes = (routes: Routes, base: Base = "") : [RoutesObject, SwitchRoute] => {

  const routesObject: RoutesObject = {
    route: () => route,
    isHome: () => route === "/",
    is404: () => route === undefined,
    isPage: (path: Route) => {
      return route != null && route.substring(0, path.length) === path
    }
  }

  const defaultRoute = routes.find(route => path(base, route) === d + pathname.split(d)[1])
  const [route, setRoute] = useState<OptionalRoute>(defaultRoute)
  const switchRoute = (route: Route) => {
    window.history.pushState(null, route, path(base, route))
    setRoute(route)
  }

  useEffect(() => {
    window.onpopstate = () => {
      setRoute(pathname)
    }
  }, [])

  return [routesObject, switchRoute]
}

export default useRoutes
