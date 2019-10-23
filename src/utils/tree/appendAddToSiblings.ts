import { getId, createFullName, createPathAdd } from "../treeItemUtils"

const appendAddToSiblings = (tree: TreeItems, parentPath?: Path) : TreeItems => {
  const newTree: TreeItems = []
  tree.forEach((treeItem, index) => {
    const basePath = parentPath ? `${ parentPath }/${ index }/` : ""
    const path = `${ basePath }${ createFullName(getId(treeItem)!) }`
    const relations = appendAddToSiblings(treeItem.relations, path)
    const treeItemAdd: TreeItem = {
      state: {},
      events: [],
      relations: [],
      name: "add",
      isCyclic: false,
      isKnown: true,
      isDestroyed: false,
      path: createPathAdd(path)
    }
    relations.push(treeItemAdd)
    const newTreeItem = { ...treeItem, relations, path }
    newTree.push(newTreeItem)
  })
  return newTree
}
export default appendAddToSiblings
