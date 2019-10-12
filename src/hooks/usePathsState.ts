import { useState } from "react"

type UsePathsState = [
  Paths,
  (p: Path) => boolean,
  (p: Path) => void,
  (p: Path) => void
]

const usePathsState = () : UsePathsState => {
  const [paths, setPaths] = useState<Paths>([])
  const is = (p: Path) => paths.includes(p)
  const set = (p: Path) => {
    if (is(p)) return
    setPaths(paths.concat(p))
  }
  const unset = (p: Path) => {
    setPaths(paths.filter(path => path !== p))
  }
  return [paths, is, set, unset]
}
export default usePathsState
