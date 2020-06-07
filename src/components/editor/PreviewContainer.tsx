/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '../../hooks/useInteractive'
import {
  useComponentStyles,
  Wrapper,
  unWrappableElements,
} from './ComponentWrapper'

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
  const { displayType, nodeName, classNames } = useComponentStyles(
    dragableWrapperProps,
  )
  if (unWrappableElements.includes(nodeName)) {
    return React.createElement(type, {
      ...component.props,
      ...forwardedProps,
      ...dragableWrapperProps,
      className: classNames,
    })
  }

  const children = React.createElement(type, {
    ...component.props,
    ...forwardedProps,
  })
  return (
    <Wrapper
      {...dragableWrapperProps}
      className={classNames}
      componentType={component.type}
      displayType={displayType}
    >
      {children}
    </Wrapper>
  )
}

export default PreviewContainer
