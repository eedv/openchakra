import { HTMLAttributes, CSSProperties } from 'react'
import {
  ButtonProps,
  GridProps,
  SwitchProps,
  CurrencyProps,
  CheckboxProps,
  SpinnerProps,
  TagProps,
  InputTextProps,
  InputNumberProps,
  InputSearchProps,
  DefaultProps as DefaultTypographyProps,
  Paragraph as ParagraphProps,
  LabelProps,
  InlineTexts as InlineTextProps,
  SelectProps,
  StepperStepProps,
  RadioButtonProps,
  DateInputProps,
  TableProps,
  TableRowProps,
  TdProps,
  ThProps,
} from '@increase/typed-components'

type defaultProps =
  | ButtonProps
  | GridProps
  | SwitchProps
  | CurrencyProps
  | CheckboxProps
  | SpinnerProps
  | (TagProps & HTMLAttributes<HTMLElement>)
  | InputTextProps
  | InputNumberProps
  | InputSearchProps
  | (DefaultTypographyProps & HTMLAttributes<HTMLElement>)
  | (DefaultTypographyProps & HTMLAttributes<HTMLElement>)
  | (DefaultTypographyProps & HTMLAttributes<HTMLElement>)
  | (ParagraphProps & HTMLAttributes<HTMLElement>)
  | (LabelProps & HTMLAttributes<HTMLElement>)
  | (LabelProps & HTMLAttributes<HTMLElement>)
  | (InlineTextProps & HTMLAttributes<HTMLElement>)
  | (InlineTextProps & HTMLAttributes<HTMLElement>)
  | (LabelProps & HTMLAttributes<HTMLElement>)
  | ({ children?: React.ReactNode } & CSSProperties)
  | SelectProps
  | HTMLAttributes<HTMLOptionElement>
  | {}
  | StepperStepProps
  | RadioButtonProps
  | Partial<DateInputProps>
  | Partial<DateInputProps>
  | TableProps
  | TableRowProps
  | TdProps
  | ThProps

type PreviewDefaultProps = {
  [key in ComponentType]: defaultProps
}

export const DEFAULT_PROPS: PreviewDefaultProps = {
  Button: {
    children: 'Button default coso',
  },
  Spinner: {
    size: 24,
  },
  Currency: {
    value: 10,
    currency: 'ARS',
  },
  H1: {
    children: 'Heading title',
  },
  H2: {
    children: 'Heading title',
  },
  H3: {
    children: 'Heading title',
  },
  Paragraph: {
    children: 'Heading title',
  },
  Label: {
    children: 'Label title',
  },
  InputLabel: {
    children: 'Input label',
  },
  InlineText: {
    children: 'Inline text',
    inline: true,
  },
  CellText: {
    children: 'Cell text',
    inline: true,
  },
  Caption: {
    children: 'Caption',
  },
  Tag: {
    children: 'Tag name',
    colors: { background: '#01A77B' },
  },
  Checkbox: {
    label: 'Label checkbox',
    id: 'checkbox-1',
  },
  Switch: {
    label: 'Label Switch',
    id: 'switch-1',
    checked: false,
  },
  Grid: {},
  InputText: {
    label: 'InputText',
  },
  InputNumber: {
    label: 'InputNumber',
  },
  InputSearch: {
    label: 'InputSearch',
  },
  Div: {},
  Select: {
    label: 'hola',
    id: 'tatata',
  },
  SelectOption: {
    children: 'Opcion',
  },
  Stepper: {},
  StepperStep: {
    description: 'Título descriptivo en negrita',
    status: 'done',
    title: 'Paso X',
  },
  RadioButton: {
    checked: true,
    label: 'Option 1',
    name: 'radioExample',
  },
  DateInput: {
    value: '20/10/2020',
    label: 'Date',
  },
  DateRangeInput: {
    value: [new Date(), new Date()],
    label: 'Date',
  },
  TableWrapper: {},
  Table: {},
  TableHeader: {},
  THead: {},
  TableRow: {},
  Td: {
    children: 'TD',
  },
  Th: {
    children: 'TH',
  },
  Pagination: {
    currentPage: 2,
    totalPages: 5,
  },
}

export const getDefaultFormProps = (type: ComponentType) => {
  return { ...DEFAULT_PROPS[type] }
}
