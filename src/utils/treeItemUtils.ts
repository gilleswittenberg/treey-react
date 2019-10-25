import treey from "treey"
const { utils: { createFullName, parseFullName } } = treey

export { createFullName }
export { parseFullName }

export const getId = (item: TreeItem) : Id | undefined => item.state.ids && item.state.ids[0]
export const getData = (item: TreeItem) : Data => item.state && item.state.data

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

export const createPath = (ids: Ids) => ids.map(id => createFullName(id)).join("/")
export const createPathAdd = (path: Path) => `${ path }/add`
export const parsePath = (path: Path) : Ids => {
  const strs = path.split("/")
  const ids = strs.map(id => parseFullName(id))
  return ids.filter((id: Id | undefined) : id is Id => id !== undefined)
}
export const isPathAdd = (path: Path) : boolean => {
  return path.slice(-4) === "/add"
}
export const getPathFromPathAdd = (path: Path) : Path => {
  return isPathAdd(path) ? path.slice(0, -4) : path
}
export const getItemFromPath = (tree: TreeItem, path: Path) : TreeItem | undefined => {
  const compareIds = (id: Id | undefined, id1: Id | undefined) => {
    if (id === undefined || id1 === undefined) return false
    return id.name === id1.name && id.protocol === id1.protocol
  }
  const getRelationFromItemById = (treeItem: TreeItem, id: Id) : TreeItem | undefined => {
    return treeItem.relations.find(item => compareIds(getId(item), id))
  }
  let ids = parsePath(path)
  if (compareIds(getId(tree), ids[0]) === false) return undefined
  ids = ids.slice(1)
  let item: TreeItem | undefined = tree
  while (ids.length > 0) {
    const id = ids[0]
    ids = ids.slice(1)
    item = getRelationFromItemById(item, id)
    if (item === undefined) return undefined
  }
  return item
}
