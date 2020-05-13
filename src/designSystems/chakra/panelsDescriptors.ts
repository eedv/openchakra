import { ControlTypes } from '../../components/inspector/controls/ControlTypes'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type control = {
  type: keyof ControlTypes
  storeKey: string
  props: {
    options?: string[]
    label: string
  }
}
export type panelDescriptor = {
  [key in ComponentType]: {
    controls: control[]
  } | null
}
export const panelDescriptors: panelDescriptor = {
  Button: {
    controls: [
      {
        type: 'ChildrenControl',
        storeKey: 'children',
        props: {
          label: 'Select Size',
          options: ['xs', 'sm', 'md', 'lg'],
        },
      },
      {
        type: 'SelectControl',
        storeKey: 'size',
        props: {
          label: 'Select Size',
          options: ['xs', 'sm', 'md', 'lg'],
        },
      },
      {
        type: 'SelectControl',
        storeKey: 'variant',
        props: {
          label: 'Select Variant',
          options: ['outline', 'ghost', 'unstyled', 'link', 'solid'],
        },
      },
    ],
  },
  AspectRatioBox: null,
  Badge: null,
  Box: null,
  Breadcrumb: null,
  Icon: null,
  IconButton: null,
  Image: null,
  Text: null,
  Progress: null,
  AvatarBadge: null,
  AvatarGroup: null,
  Avatar: null,
  Checkbox: null,
  Link: null,
  Spinner: null,
  CloseButton: null,
  Divider: null,
  Textarea: null,
  CircularProgress: null,
  Heading: null,
  Tag: null,
  Switch: null,
  SimpleGrid: null,
  Alert: null,
  AlertIcon: null,
  AlertTitle: null,
  AlertDescription: null,
  Flex: null,
  Stack: null,
  Accordion: null,
  AccordionItem: null,
  AccordionHeader: null,
  AccordionPanel: null,
  AccordionIcon: null,
  FormControl: null,
  FormLabel: null,
  FormHelperText: null,
  FormErrorMessage: null,
  TabList: null,
  TabPanel: null,
  TabPanels: null,
  Tab: null,
  Tabs: null,
  Code: null,
  Editable: null,
  Menu: null,
  NumberInput: null,
  Radio: null,
  RadioGroup: null,
  Select: null,
  List: null,
  ListItem: null,
  ListIcon: null,
  Input: null,
  InputGroup: null,
  InputLeftAddon: null,
  InputRightAddon: null,
  InputLeftElement: null,
  InputRightElement: null,
  Grid: null,
  BreadcrumbItem: null,
  BreadcrumbLink: null,
}
