/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '../../hooks/useInteractive'
import { useDropComponent } from '../../hooks/useDropComponent'
import ComponentPreview from './ComponentPreview'
import {
  useComponentStyles,
  Wrapper,
  unWrappableElements,
} from './ComponentWrapper'

const WithChildrenPreviewContainer: React.FC<{
  component: IComponent
  type: string | FunctionComponent<any> | ComponentClass<any, any>
  enableVisualHelper?: boolean
  isBoxWrapped?: boolean
}> = ({
  component,
  type,
  enableVisualHelper = false,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { dragableWrapperProps } = useInteractive(component, enableVisualHelper)
  const Component = type
  dragableWrapperProps.isOver = isOver
  dragableWrapperProps.ref = drop(dragableWrapperProps.ref)
  const { displayType, nodeName, classNames } = useComponentStyles(
    dragableWrapperProps,
  )

  if (unWrappableElements.includes(nodeName) || !isBoxWrapped) {
    return (
      <Component
        {...{
          ...component.props,
          ...forwardedProps,
          ...dragableWrapperProps,
          className: classNames,
        }}
      >
        {component.props.children}
        {component.children.map((key: string) => (
          <ComponentPreview componentName={key} key={key} />
        ))}
      </Component>
    )
  }

  const children = (
    <Component
      {...{
        ...component.props,
        ...forwardedProps,
      }}
    >
      {component.props.children}
      {component.children.map((key: string) => (
        <ComponentPreview componentName={key} key={key} />
      ))}
    </Component>
  )
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

export default WithChildrenPreviewContainer
