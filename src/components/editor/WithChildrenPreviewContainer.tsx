/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '../../hooks/useInteractive'
import { useDropComponent } from '../../hooks/useDropComponent'
import ComponentPreview from './ComponentPreview'
import { ComponentWrapper } from './ComponentWrapper'

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

  dragableWrapperProps.isOver = isOver
  dragableWrapperProps.isContainer = component.children.length === 0

  const children = React.createElement(
    type,
    {
      ...component.props,
      ...forwardedProps,
    },
    component.children.map((key: string) => (
      <ComponentPreview componentName={key} key={key} />
    )),
  )

  dragableWrapperProps.ref = drop(dragableWrapperProps.ref)

  return (
    <ComponentWrapper {...dragableWrapperProps}>{children}</ComponentWrapper>
  )
}

export default WithChildrenPreviewContainer
