import { getId, createPath } from "../treeItemUtils"

const pruneTree = (tree: TreeItems, isOpen: Paths, parents: Ids = []) : TreeItems => {
  const prunedTree: TreeItems = []
  tree.forEach(treeItem => {
    const id = getId(treeItem)
    const ids = id !== undefined ? parents.concat(id) : parents
    const path = createPath(ids)
    const treeItemIsOpen = isOpen.includes(path)
    const hasRelations = treeItem.relations.length > 1
    const shouldPrune = treeItemIsOpen && hasRelations
    const relations = shouldPrune ? pruneTree(treeItem.relations, isOpen, ids) : []
    const newTreeItem = { ...treeItem, relations }
    prunedTree.push(newTreeItem)
  })
  return prunedTree
}
export default pruneTree
