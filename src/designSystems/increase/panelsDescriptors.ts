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

const SizeControl: control = {
  type: 'SelectControl',
  storeKey: 'size',
  props: {
    label: 'Size',
    options: ['normal', 'small'],
  },
}
export const panelDescriptors: panelDescriptor = {
  Div: {
    controls: [
      {
        type: 'ChildrenControl',
        storeKey: 'children',
        props: {
          label: 'Inner text',
        },
      },
    ],
  },
  Button: {
    controls: [
      {
        type: 'ChildrenControl',
        storeKey: 'children',
        props: {
          label: 'Inner text',
        },
      },
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
    controls: [
      {
        type: 'TextControl',
        storeKey: 'colors',
        props: {
          label: 'Colors object',
        },
      },
    ],
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
  H2: {
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
  H3: {
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
  Paragraph: {
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
  Label: {
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
  InputLabel: {
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
  InlineText: {
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
  CellText: {
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
  Caption: {
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
}
