import { getId, createPath } from "../treeItemUtils"
import { Ids, TreeItem, TreeItems } from "treey"

const mapTreeItem = (treeItem: TreeItem & TreeNode, parents: Ids) : TreeItems => {
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
