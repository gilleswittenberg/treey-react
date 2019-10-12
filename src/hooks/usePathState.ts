import { useState } from "react"

type UsePathState = [
  Path | undefined,
  (p?: Path) => boolean,
  (p: Path) => void,
  () => void
]

const usePathState = () : UsePathState => {
  const [path, setPath] = useState<Path>()
  const is = (p?: Path) => p === undefined ? path !== undefined : p === path
  const set = (p: Path) => setPath(p)
  const unset = () => setPath(undefined)
  return [path, is, set, unset]
}
export default usePathState
