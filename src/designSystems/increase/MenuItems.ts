export type MenuItemType = {
  children?: MenuItemType[]
  isContainer?: boolean
  soon?: boolean
  rootParentType?: ComponentType
  type: ComponentType
}

export type Preset = Omit<MenuItemType, 'type' | 'rootParentType'> & {
  mainComponentType: ComponentType
  type: PresetType
}

export const menuItems: MenuItemType[] = [
  { type: 'Button' },
  { type: 'Grid', isContainer: true },
  { type: 'Switch' },
  { type: 'Checkbox' },
  { type: 'RadioButton' },
  { type: 'Currency' },
  { type: 'Spinner' },
  { type: 'Tag' },
  { type: 'InputText' },
  { type: 'InputNumber' },
  { type: 'InputSearch' },
  { type: 'H1' },
  { type: 'H2' },
  { type: 'H3' },
  { type: 'Paragraph', isContainer: true },
  { type: 'Label' },
  { type: 'InputLabel' },
  { type: 'InlineText' },
  { type: 'CellText' },
  { type: 'Caption' },
  {
    type: 'Div',
    isContainer: true,
  },
  {
    type: 'DateInput',
    soon: true,
  },
  {
    type: 'DateRangeInput',
    soon: true,
  },
  {
    type: 'Select',
    isContainer: true,
  },
  { type: 'SelectOption' },
  {
    type: 'Stepper',
    isContainer: true,
  },
  {
    type: 'TableWrapper',
    isContainer: true,
  },
  {
    type: 'Table',
    isContainer: true,
  },
  {
    type: 'TableHeader',
    isContainer: true,
  },
  {
    type: 'THead',
    isContainer: true,
  },
  {
    type: 'TableRow',
    isContainer: true,
  },
  {
    type: 'Td',
    isContainer: true,
  },
  {
    type: 'Th',
    isContainer: true,
  },
  {
    type: 'Pagination',
  },
]

export const presetsList: Preset[] = [
  {
    type: 'StepperPreset',
    mainComponentType: 'Stepper',
    children: [
      {
        type: 'StepperStep',
      },
    ],
  },
  {
    type: 'TablePreset',
    mainComponentType: 'TableWrapper',
    children: [
      {
        type: 'TableHeader',
        children: [{ type: 'H2' }, { type: 'Button' }],
      },
      {
        type: 'Table',
        children: [
          {
            type: 'THead',
            children: [
              {
                type: 'TableRow',
                children: [
                  { type: 'Th' },
                  { type: 'Th' },
                  { type: 'Th' },
                  { type: 'Th' },
                ],
              },
            ],
          },
          {
            type: 'TableRow',
            children: [
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
            ],
          },
          {
            type: 'TableRow',
            children: [
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
            ],
          },
          {
            type: 'TableRow',
            children: [
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
              { type: 'Td' },
            ],
          },
        ],
      },
    ],
  },
  // Example of a complex preset
  {
    type: 'MegaDiv',
    mainComponentType: 'Div',
    children: [
      {
        type: 'Div',
        children: [{ type: 'Checkbox' }],
      },
      {
        type: 'Div',
        children: [
          { type: 'Switch' },
          { type: 'Tag' },
          { type: 'Div', children: [{ type: 'Div' }] },
        ],
      },
    ],
  },
]
