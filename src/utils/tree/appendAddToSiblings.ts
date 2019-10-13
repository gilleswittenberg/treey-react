import { getId, getName } from "../treeItemUtils"

const appendAddToSiblings = (tree: TreeItems, path?: Path) : TreeItems => {
  const newTree: TreeItems = []
  const parents: Ids = []
  tree.forEach(treeItem => {
    const path = getName(getId(treeItem), parents)
    const relations = appendAddToSiblings(treeItem.relations)
    const treeItemAdd: TreeItem = {
      state: {},
      events: [],
      relations: [],
      name: "add",
      isCyclic: false,
      isKnown: true,
      isDestroyed: false,
      path: `${ path }/add`
    }
    relations.push(treeItemAdd)
    const newTreeItem = { ...treeItem, relations }
    newTree.push(newTreeItem)
  })
  return newTree
}
export default appendAddToSiblings
