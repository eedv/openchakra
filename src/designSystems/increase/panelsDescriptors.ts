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

const SizeOptions = ['normal', 'small']
export const panelDescriptors: panelDescriptor = {
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
      {
        type: 'SelectControl',
        storeKey: 'size',
        props: {
          label: 'Size',
          options: SizeOptions,
        },
      },
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
      {
        type: 'SelectControl',
        storeKey: 'size',
        props: {
          label: 'Size',
          options: SizeOptions,
        },
      },
    ],
  },
  Currency: {
    controls: [
      {
        type: 'TextControl',
        storeKey: 'separator',
        props: {
          label: 'Separator',
        },
      },
      {
        type: 'TextControl',
        storeKey: 'spacing',
        props: {
          label: 'Spacing',
        },
      },
      {
        type: 'SwitchControl',
        storeKey: 'addSeparator',
        props: {
          label: 'With separator',
        },
      },
    ],
  },
  Checkbox: {
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
  Spinner: {
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
  Tag: {
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
  InputText: {
    controls: [
      {
        type: 'TextControl',
        storeKey: 'label',
        props: {
          label: 'Label',
        },
      },
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
