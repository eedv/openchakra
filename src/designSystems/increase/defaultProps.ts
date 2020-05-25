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
} from '@increase/typed-components'
type PreviewDefaultProps = {
  Button: ButtonProps
  Grid: GridProps
  Switch: SwitchProps
  Currency: CurrencyProps
  Checkbox: CheckboxProps
  Spinner: SpinnerProps
  Tag: TagProps & HTMLAttributes<HTMLElement>
  InputText: InputTextProps
  InputNumber: InputNumberProps
  InputSearch: InputSearchProps
  H1: DefaultTypographyProps & HTMLAttributes<HTMLElement>
  H2: DefaultTypographyProps & HTMLAttributes<HTMLElement>
  H3: DefaultTypographyProps & HTMLAttributes<HTMLElement>
  Paragraph: ParagraphProps & HTMLAttributes<HTMLElement>
  Label: LabelProps & HTMLAttributes<HTMLElement>
  InputLabel: LabelProps & HTMLAttributes<HTMLElement>
  InlineText: InlineTextProps & HTMLAttributes<HTMLElement>
  CellText: InlineTextProps & HTMLAttributes<HTMLElement>
  Caption: LabelProps & HTMLAttributes<HTMLElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Div: { children?: React.ReactNode } & CSSProperties
  Select: SelectProps
  SelectOption: HTMLAttributes<HTMLOptionElement>
  Stepper: {}
  StepperStep: StepperStepProps
  RadioButton: RadioButtonProps
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
}

export const getDefaultFormProps = (type: ComponentType) => {
  return { ...DEFAULT_PROPS[type] }
}
