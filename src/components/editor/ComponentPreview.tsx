/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import WithChildrenPreviewContainer from './WithChildrenPreviewContainer'
import { getComponentBy } from '../../core/selectors/components'
import PreviewContainer from './PreviewContainer'
import { getComponentDefinition } from '../../designSystems/increase/MenuItems'
import { getComponent } from '../../designSystems'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  const compDef = getComponentDefinition(component.type)

  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const isContainer = (compDef && compDef.isContainer) || null
  const type = component && component.type
  if (type === 'Div') {
    return (
      <WithChildrenPreviewContainer
        component={component}
        type={getComponent(type)}
        {...forwardedProps}
        isBoxWrapped={true}
      />
    )
  } else if (isContainer) {
    return (
      <WithChildrenPreviewContainer
        component={component}
        type={getComponent(type)}
        {...forwardedProps}
        isBoxWrapped
      />
    )
  }

  return (
    <PreviewContainer
      component={component}
      type={getComponent(type)}
      {...forwardedProps}
      isBoxWrapped={true}
    />
  )
}

export default memo(ComponentPreview)
