import { getId, createPath } from "../treeItemUtils"

const mapTreeItem = (treeItem: TreeItem, parents: Ids) : TreeItems => {
  const id = getId(treeItem)
  const ids = id !== undefined ? parents.concat(id) : parents
  const path = treeItem.path ? treeItem.path : createPath(ids)
  const newTreeItem = { ...treeItem, path }
  return [newTreeItem, newTreeItem.relations.map(relation => mapTreeItem(relation, ids))].flat(Infinity) as TreeItems
}
const flattenTree = (tree: TreeItems) : TreeItems => {
  return tree.map(treeItem => mapTreeItem(treeItem, [])).flat(Infinity) as TreeItems
}
export default flattenTree
