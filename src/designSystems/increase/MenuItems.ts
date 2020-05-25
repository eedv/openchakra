export type MenuItemType = {
  children?: MenuItemsType
  soon?: boolean
  rootParentType?: ComponentType
}

export type MenuItemsType = Partial<
  {
    [k in ComponentType]: MenuItemType
  }
>

export const menuItems: MenuItemsType = {
  Button: {},
  Grid: {},
  Switch: {},
  Currency: {},
  Checkbox: {},
  Spinner: {},
  Tag: {},
  InputText: {},
  InputNumber: {},
  InputSearch: {},
  H1: {},
  H2: {},
  H3: {},
  Paragraph: {},
  Label: {},
  InputLabel: {},
  InlineText: {},
  CellText: {},
  Caption: {},
  Div: {},
  Select: {
    children: {
      option: {},
    },
  },
}
