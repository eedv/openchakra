/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlTypes } from '../../components/inspector/controls/ControlTypes'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type control = {
  type: keyof ControlTypes
  storeKey: string
  props: {
    label: string
    [key: string]: any
  }
}
export type panelDescriptor = {
  [key in ComponentType]: {
    controls: control[]
  } | null
}

const getWeightControl = (weigthOptions?: string[]): control => {
  return {
    type: 'SelectControl',
    storeKey: 'weight',
    props: {
      label: 'Font weight',
      options: weigthOptions || ['bold', 'normal', '400', '700'],
    },
  }
}

const SizeControl: control = {
  type: 'SelectControl',
  storeKey: 'size',
  props: {
    label: 'Size',
    options: ['normal', 'small'],
  },
}

const ChildrenTextControl: control = {
  type: 'ChildrenControl',
  storeKey: 'children',
  props: {
    label: 'Inner text',
  },
}
export const panelDescriptors: panelDescriptor = {
  Div: {
    controls: [
      ChildrenTextControl,
      {
        type: 'SelectControl',
        storeKey: 'as',
        props: {
          label: 'Render as',
          options: ['div', 'option'],
        },
      },
    ],
  },
  Select: {
    controls: [
      {
        type: 'TextControl',
        storeKey: 'label',
        props: {
          label: 'Label',
        },
      },
      SizeControl,
    ],
  },
  option: {
    controls: [ChildrenTextControl],
  },
  Button: {
    controls: [
      ChildrenTextControl,
      {
        type: 'SelectControl',
        storeKey: 'buttonType',
        props: {
          label: 'Select Variant',
          options: ['primary', 'invisible', 'outline', 'alert'],
        },
      },
      SizeControl,
      {
        type: 'SelectControl',
        storeKey: 'as',
        props: {
          label: 'Render as',
          options: ['Button', 'a'],
        },
      },
    ],
  },
  Grid: {
    controls: [
      {
        type: 'NumberControl',
        storeKey: 'columnGap',
        props: {
          label: 'Column gap',
          step: 1,
        },
      },
      {
        type: 'NumberControl',
        storeKey: 'rowGap',
        props: {
          label: 'Row gap',
          step: 1,
        },
      },
    ],
  },
  Switch: {
    controls: [
      {
        type: 'TextControl',
        storeKey: 'label',
        props: {
          label: 'Label',
        },
      },
      SizeControl,
    ],
  },
  Currency: {
    controls: [
      {
        type: 'NumberControl',
        storeKey: 'value',
        props: {
          label: 'Value',
        },
      },
      {
        type: 'SelectControl',
        storeKey: 'currency',
        props: {
          label: 'Currency',
          options: ['ARS', 'USD'],
        },
      },
      {
        type: 'SelectControl',
        storeKey: 'language',
        props: {
          label: 'Local',
          options: ['es-AR', 'es-US', 'en-US'],
        },
      },
    ],
  },
  Checkbox: {
    controls: [
      SizeControl,
      {
        type: 'SwitchControl',
        storeKey: 'labelHidden',
        props: {
          label: 'Hide Label',
        },
      },
    ],
  },
  Spinner: {
    controls: [
      {
        type: 'NumberControl',
        storeKey: 'size',
        props: {
          label: 'Size',
        },
      },
    ],
  },
  Tag: {
    controls: [ChildrenTextControl],
  },
  InputText: {
    controls: [
      {
        type: 'TextControl',
        storeKey: 'label',
        props: {
          label: 'Label',
        },
      },
      {
        type: 'TextControl',
        storeKey: 'placeholder',
        props: {
          label: 'Placeholder',
        },
      },
      SizeControl,
    ],
  },
  InputNumber: {
    controls: [
      {
        type: 'ColorsControl',
        storeKey: 'backgroundColor',
        props: {
          label: 'Color',
          withFullColor: true,
          enableHues: true,
        },
      },
    ],
  },
  InputSearch: {
    controls: [
      {
        type: 'ColorsControl',
        storeKey: 'backgroundColor',
        props: {
          label: 'Color',
          withFullColor: true,
          enableHues: true,
        },
      },
    ],
  },
  H1: {
    controls: [ChildrenTextControl, getWeightControl()],
  },
  H2: {
    controls: [ChildrenTextControl, getWeightControl()],
  },
  H3: {
    controls: [ChildrenTextControl, getWeightControl()],
  },
  Paragraph: {
    controls: [
      ChildrenTextControl,
      getWeightControl(),
      {
        type: 'SwitchControl',
        storeKey: 'ellipsis',
        props: {
          label: 'Text ellipsis',
        },
      },
    ],
  },
  Label: {
    controls: [ChildrenTextControl, getWeightControl(['bold', '500', '700'])],
  },
  InputLabel: {
    controls: [ChildrenTextControl, getWeightControl(['bold', '500', '700'])],
  },
  InlineText: {
    controls: [
      ChildrenTextControl,
      getWeightControl(),
      {
        type: 'SwitchControl',
        storeKey: 'inline',
        props: {
          label: 'Display inline',
        },
      },
    ],
  },
  CellText: {
    controls: [
      ChildrenTextControl,
      getWeightControl(),
      {
        type: 'SwitchControl',
        storeKey: 'inline',
        props: {
          label: 'Display inline',
        },
      },
    ],
  },
  Caption: {
    controls: [ChildrenTextControl, getWeightControl(['bold', '500', '700'])],
  },
}
