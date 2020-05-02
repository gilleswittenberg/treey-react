import { getId, createPathAdd } from "../treeItemUtils"
import { createFullName, TreeItem, TreeItems } from "treey"

const appendAddToSiblings = (tree: TreeItems, parentPath?: Path) : TreeItems => {
  const newTree: TreeItems = []
  tree.forEach((treeItem, index) => {
    const basePath = parentPath ? `${ parentPath }/${ index }/` : ""
    const path = `${ basePath }${ createFullName(getId(treeItem)!) }`
    const relations = appendAddToSiblings(treeItem.relations, path)
    const treeItemAdd: TreeItem & TreeNode = {
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
