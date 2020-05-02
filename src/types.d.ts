declare type ItemEvent = any
declare type Path = string
declare type Paths = Path[]
declare type TreeNode = {
  readonly path?: Path
}
declare type TreeNodes = TreeNode[]

declare type DraggableData = {
  type: string
  parent: Id
  index: Index
  id: Id
  path: Path
}

declare type Direction = "next" | "prev"

declare type AlertType = "message" | "warning" | "error"
declare type Alert = {
  message: string,
  type?: AlertType
}
declare type Alerts = Alert[]
