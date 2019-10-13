import { getId, getName } from "../treeItemUtils"

const mapTreeItem = (treeItem: TreeItem, parents: Ids) : TreeItems => {
  const id = getId(treeItem)!
  const path = treeItem.path ? treeItem.path : getName(id, parents)
  const newTreeItem = { ...treeItem, path }
  return [newTreeItem, newTreeItem.relations.map(relation => mapTreeItem(relation, parents.concat(id)))].flat(Infinity) as TreeItems
}
const flattenTree = (tree: TreeItems) : TreeItems => {
  return tree.map(treeItem => mapTreeItem(treeItem, [])).flat(Infinity) as TreeItems
}
export default flattenTree
