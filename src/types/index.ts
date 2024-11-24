export interface ActionType {
  url: string
  pureHeader?: boolean
  body?: {}
  query?: string
  accessToken?: string
}

export interface ITab {
  idx: number
  label: string
  value: string
}

export interface IInput {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  isActive: boolean
  isDisabled?: boolean
  isAlert?: boolean
  hasLabel?: boolean
  label?: string
  alertMessage?: string
  hasButton?: boolean
}

export interface IBasket {
  id: number
  name: string
  checked?: boolean
  count: number
  createTime?: string
  updateTime?: string
  category?: {
    name: string
  }
}

export interface ITemplateBasket {
  name: string
  categoryName: string
  count: number
}

export interface IBottomModal {
  title: string
  idx: number
  // list: Array<IBottomModalListItem>
}

export interface IBottomModalListItem {
  src: string
  alt: string
  text: string
  onClick: () => void
}

export interface ITemplate {
  createTime: string
  id: number
  isPublic: false
  name: string
  percent?: number
  preview?: Array<string>
  updateTime: string
  userId: number
  thumbnailIndex: number
}

export interface IKeyword {
  name: string
  category: string
}

export interface ICategories {
  id: number
  name: string
}
