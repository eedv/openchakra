/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import * as Increase from '@increase/typed-components'
import WithChildrenPreviewContainer from './WithChildrenPreviewContainer'
import { getComponentBy } from '../../core/selectors/components'
import PreviewContainer from './PreviewContainer'
import { getComponentDefinition } from '../../designSystems/increase/MenuItems'
const GenericDiv = styled.div``

const Div: React.FC<any> = ({ children, ...rest }) => {
  return (
    <GenericDiv {...rest} style={rest}>
      {children}
    </GenericDiv>
  )
}

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
        type={Div}
        {...forwardedProps}
        isBoxWrapped={true}
      />
    )
  } else if (isContainer) {
    return (
      <WithChildrenPreviewContainer
        component={component}
        type={Increase[type]}
        {...forwardedProps}
        isBoxWrapped
      />
    )
  }

  return (
    <PreviewContainer
      component={component}
      type={Increase[type]}
      {...forwardedProps}
      isBoxWrapped={true}
    />
  )
}

export default memo(ComponentPreview)
