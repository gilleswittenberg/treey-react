import treey from "treey"
const { utils: { createFullName, parseFullName } } = treey

export const getId = (item: TreeItem) : Id | undefined => item.state.ids && item.state.ids[0]
export const getData = (item: TreeItem) : Data => item.state && item.state.data
// @TODO: getPath should return Path not Ids
export const getPath = (id: Id | undefined, parents: Ids) : Ids => id ? parents.concat(id) : parents
export const getName = (id: Id | undefined, parents: Ids) : Name => getPath(id, parents).map(id => createFullName(id)).join("/")
export const stringifyData = (data: Data) : string => {
  if (typeof data === "string") return data
  return JSON.stringify(data, undefined, 1)
}
export const parseData = (str: string) : Data => {
  try {
    return JSON.parse(str)
  } catch (err) {
    return str
  }
}
export const parsePath = (path: Path) : Ids => {
  const strs = path.split("/")
  const ids = strs.map(id => parseFullName(id))
  return ids.filter((id: Id | undefined) : id is Id => id !== undefined)
}
export const isPathAdd = (path: Path) : boolean => {
  return path.slice(-4) === "/add"
}
export { createFullName }
export { parseFullName }
