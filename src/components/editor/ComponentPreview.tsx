/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import * as Increase from '@increase/typed-components'
import WithChildrenPreviewContainer from './WithChildrenPreviewContainer'
import { getComponentBy } from '../../core/selectors/components'
import PreviewContainer from './PreviewContainer'

const GenericDiv = styled.div`
  ${css}
`

const Div: React.FC<any> = ({ children, ...rest }) => {
  return <GenericDiv {...rest}>{children}</GenericDiv>
}

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null
  switch (type) {
    case 'Div':
      return (
        <WithChildrenPreviewContainer
          component={component}
          type={Div}
          {...forwardedProps}
          isBoxWrapped={false}
        />
      )
    case 'Grid':
    case 'Select':
    case 'Stepper':
      return (
        <WithChildrenPreviewContainer
          component={component}
          type={Increase[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    case 'SelectOption':
      return (
        <PreviewContainer
          component={component}
          type={Increase[type]}
          {...forwardedProps}
          isBoxWrapped={false}
        />
      )
    default:
      return (
        <PreviewContainer
          component={component}
          type={Increase[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
  }
}

export default memo(ComponentPreview)
