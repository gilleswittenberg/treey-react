declare type Name = string
declare type FullName = string
declare type Protocol = string
declare type Id = {
  name: Name
  protocol?: Protocol
}
declare type Ids = Id[]
declare type Data = any
declare type Index = number
declare type TreeItem = any
declare type TreeItems = TreeItem[]
declare type ItemEvent = any
declare type Path = string
declare type Paths = Path[]

declare type Treey = {
  read (id: Id) : Promise<TreeItem | undefined>
  createAndAdd (data: Data, parentId: Id) : void
  update (id: Id, data: Data) : void
  remove (id: Id, parentId: Id, index: Index) : void
  move (id: Id, oldParentId: Id, parentId: Id, oldIndex: Index, index: Index) : void
}
