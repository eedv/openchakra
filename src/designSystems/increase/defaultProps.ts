import { HTMLAttributes } from 'react'
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
    currency: '$',
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
    children: 'Heading title',
  },
  InlineText: {
    children: 'Heading title',
  },
  CellText: {
    children: 'Heading title',
  },
  Caption: {
    children: 'Heading title',
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
  InputText: {},
  InputNumber: {},
  InputSearch: {},
}

export const getDefaultFormProps = (type: ComponentType) => {
  return { ...DEFAULT_PROPS[type] }
}
