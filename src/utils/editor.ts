/* const ALERT_COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Alert',
  'AlertDescription',
  'AlertIcon',
  'AlertTitle',
] */

export const COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Button',
  'Grid',
  'Switch',
  'Currency',
  'Checkbox',
  'Spinner',
  'Tag',
  'InputText',
  'InputNumber',
  'InputSearch',
  'H1',
  'H2',
  'H3',
  'Paragraph',
  'Label',
  'InputLabel',
  'InlineText',
  'CellText',
  'Caption',
  'Div',
  'Select',
  'option',
]

/* export const AccordionWhitelist: (
  | ComponentType
  | MetaComponentType
)[] = COMPONENTS.filter(name => !ALERT_COMPONENTS.includes(name))
 */
export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![
        'AlertIcon',
        'AlertDescription',
        'AlertTitle',
        'AvatarBadge',
        'AccordionHeader',
        'AccordionPanel',
        'AccordionIcon',
      ].includes(name),
  )
