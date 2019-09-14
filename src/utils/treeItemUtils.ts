import treey from "treey"
const { utils: { createFullName } } = treey

export const getId = (item: TreeItem) : Id | undefined => item.state.ids && item.state.ids[0]
export const getData = (item: TreeItem) : Data => item.state && item.state.data
export const getPath = (id: Id | undefined, parents: Ids) : Ids => id ? parents.concat(id) : parents
export const getName = (id: Id | undefined, parents: Ids) : Name => getPath(id, parents).map(id => createFullName(id)).join("/")
export const stringifyData = (data: Data) : string => {
  if (typeof data === "string") return data
  return JSON.stringify(data)
}
export const parseData = (str: string) : Data => {
  try {
    return JSON.parse(str)
  } catch (err) {
    return str
  }
}
