import React, { memo } from 'react'
import ChildrenControl from '../controls/ChildrenControl'
import ColorsControl from '../controls/ColorsControl'
import IconControl from '../controls/IconControl'
import NumberControl from '../controls/NumberControl'
import SelectControl from '../controls/SelectControl'
import SwitchControl from '../controls/SwitchControl'
import TextControl from '../controls/TextControl'
import { panelDescriptors } from '../../../designSystems/increase/panelsDescriptors'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const { type } = component
  const descriptor = panelDescriptors[type]

  const Panel =
    descriptor &&
    descriptor.controls.map((controlDescriptor, index: number) => {
      const { storeKey, type, props } = controlDescriptor
      switch (type) {
        case 'ChildrenControl':
          return <ChildrenControl key={index} {...controlDescriptor.props} />
        case 'SelectControl':
          return (
            <SelectControl
              key={index}
              label={props && props.label}
              name={storeKey}
              options={props && props.options}
            />
          )
        case 'ColorsControl':
          return (
            <ColorsControl
              key={index}
              label={props && props.label}
              name={storeKey}
            />
          )
        case 'IconControl':
          return (
            <IconControl
              key={index}
              label={props && props.label}
              name={storeKey}
            />
          )
        case 'SwitchControl':
          return (
            <SwitchControl
              key={index}
              label={props && props.label}
              name={storeKey}
            />
          )
        case 'NumberControl':
          return (
            <NumberControl
              key={index}
              label={props && props.label}
              name={storeKey}
            />
          )
        case 'TextControl':
          return (
            <TextControl
              hasColumn={false}
              key={index}
              label={props && props.label}
              name={storeKey}
            />
          )
        default:
          return null
      }
    })

  if (isRoot) {
    return null
  }
  return <>{Panel}</>
}

export default memo(Panels)
