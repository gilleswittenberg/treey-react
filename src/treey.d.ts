declare type Id = string
declare type Data = any
declare type Index = number
declare type TreeItem = any
declare type TreeItems = TreeItem[]
declare type ItemEvent = any

declare type Treey = {
  read (id: Id) : Promise<TreeItem | undefined>
  createAndAdd (data: Data, parentId: Id) : void
  update (id: Id, data: Data) : void
  remove (id: Id, parentId: Id, index: Index) : void
  move (id: Id, oldParentId: Id, oldIndex: Index, parentId: Id, index: Index) : void
}
