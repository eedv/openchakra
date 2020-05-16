/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import useDispatch from './useDispatch'
import { useDrag } from 'react-dnd'
import {
  getIsSelectedComponent,
  getIsHovered,
} from '../core/selectors/components'
import { getShowLayout, getFocusedComponent } from '../core/selectors/app'

type wrapperProps = {
  ref: any
  className?: string
  onMouseOver: (event: MouseEvent) => void
  onMouseOut: (event: MouseEvent) => void
  onClick: (event: MouseEvent) => void
  onDoubleClick: (event: MouseEvent) => void
}
export const useInteractive = (
  component: IComponent,
  enableVisualHelper = false,
) => {
  const dispatch = useDispatch()
  const showLayout = useSelector(getShowLayout)
  const isComponentSelected = useSelector(getIsSelectedComponent(component.id))
  const isHovered = useSelector(getIsHovered(component.id))
  const focusInput = useSelector(getFocusedComponent(component.id))

  const [, drag] = useDrag({
    item: { id: component.id, type: component.type, isMoved: true },
  })

  const ref = useRef<HTMLDivElement>(null)
  const dragableWrapperProps: wrapperProps = {
    ref: drag(ref),
    onMouseOver: (event: MouseEvent) => {
      event.stopPropagation()
      dispatch.components.hover(component.id)
    },
    onMouseOut: () => {
      dispatch.components.unhover()
    },
    onClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch.components.select(component.id)
    },
    onDoubleClick: (event: MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (focusInput === false) {
        dispatch.app.toggleInputText()
      }
    },
  }

  // TODO: add classnames to ComponentWrapper as export
  if (showLayout && enableVisualHelper) {
    dragableWrapperProps.className = `${dragableWrapperProps.className ||
      ''} component-selected`
  }

  if (isHovered || isComponentSelected) {
    dragableWrapperProps.className = `${dragableWrapperProps.className ||
      ''} component-hovered`
  }

  return { dragableWrapperProps, drag }
}
