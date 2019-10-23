const pruneTree = (tree: TreeItems, isOpen: Paths) : TreeItems => {
  const prunedTree: TreeItems = []
  tree.forEach(treeItem => {
    const treeItemIsOpen = isOpen.includes(treeItem.path!)
    const hasRelations = treeItem.relations.length > 1
    const shouldPrune = treeItemIsOpen && hasRelations
    const relations = shouldPrune ? pruneTree(treeItem.relations, isOpen) : []
    const newTreeItem = { ...treeItem, relations }
    prunedTree.push(newTreeItem)
  })
  return prunedTree
}
export default pruneTree
