/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

type ComponentType =
  | 'Button'
  | 'Grid'
  | 'Switch'
  | 'Currency'
  | 'Checkbox'
  | 'Spinner'
  | 'Tag'
  | 'InputText'
  | 'InputNumber'
  | 'InputSearch'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'Paragraph'
  | 'Label'
  | 'InputLabel'
  | 'InlineText'
  | 'CellText'
  | 'Caption'
  | 'Div'
  | 'Select'
  | 'SelectOption'
  | 'Stepper'
  | 'StepperStep'
  | 'RadioButton'
  | 'DateInput'
  | 'DateRangeInput'
  | 'TableWrapper'
  | 'Table'
  | 'TableHeader'
  | 'THead'
  | 'TableRow'
  | 'Td'
  | 'Th'
  | 'Pagination'

type PresetType = 'StepperPreset' | 'MegaDiv' | 'TablePreset'
type seriablizableObject = {
  [key: string]:
    | string
    | number
    | boolean
    | seriablizableObject[]
    | seriablizableObject
    | undefined
}
interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  presetType?: PresetType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
}
