import { getId, getName } from "../treeItemUtils"

const pruneTree = (tree: TreeItems, isOpen: Paths) : TreeItems => {
  const prunedTree: TreeItems = []
  const parents: Ids = []
  tree.forEach(treeItem => {
    const treeItemName = getName(getId(treeItem), parents)
    const treeItemIsOpen = isOpen.includes(treeItemName)
    const relations = treeItemIsOpen ? pruneTree(treeItem.relations, isOpen) : []
    const newTreeItem = { ...treeItem, relations }
    prunedTree.push(newTreeItem)
  })
  return prunedTree
}
export default pruneTree
