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
  | 'option'
  | 'Stepper'
  | 'StepperStep'

type MetaComponentType = 'SelectMeta' | 'StepperMeta'

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
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
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
