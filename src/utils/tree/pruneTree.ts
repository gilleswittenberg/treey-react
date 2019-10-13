import { getId, getName } from "../treeItemUtils"

const pruneTree = (tree: TreeItems, isOpen: Paths, parents: Ids = []) : TreeItems => {
  const prunedTree: TreeItems = []
  tree.forEach(treeItem => {
    const id = getId(treeItem)!
    const treeItemName = getName(id, parents)
    const treeItemIsOpen = isOpen.includes(treeItemName)
    const relations = treeItemIsOpen ? pruneTree(treeItem.relations, isOpen, parents.concat(id)) : []
    const newTreeItem = { ...treeItem, relations }
    prunedTree.push(newTreeItem)
  })
  return prunedTree
}
export default pruneTree
