/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '../../hooks/useInteractive'
import { ComponentWrapper } from './ComponentWrapper'

const PreviewContainer: React.FC<{
  component: IComponent
  type: string | FunctionComponent<any> | ComponentClass<any, any>
  enableVisualHelper?: boolean
  isBoxWrapped?: boolean
}> = ({
  component,
  type,
  enableVisualHelper,
  isBoxWrapped = true,
  ...forwardedProps
}) => {
  const { dragableWrapperProps } = useInteractive(component, enableVisualHelper)
  const children = React.createElement(type, {
    ...component.props,
    ...forwardedProps,
  })

  if (!isBoxWrapped) {
    return children
  }
  return (
    <ComponentWrapper {...dragableWrapperProps}>{children}</ComponentWrapper>
  )
}

export default PreviewContainer
