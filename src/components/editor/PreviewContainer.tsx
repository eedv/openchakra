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
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { dragableWrapperProps } = useInteractive(component, enableVisualHelper)
  console.log(dragableWrapperProps)
  const children = React.createElement(type, {
    ...component.props,
    ...forwardedProps,
  })

  return (
    <ComponentWrapper {...dragableWrapperProps}>{children}</ComponentWrapper>
  )
}

export default PreviewContainer
