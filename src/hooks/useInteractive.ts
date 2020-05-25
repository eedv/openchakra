/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import useDispatch from './useDispatch'
import { useDrag } from 'react-dnd'
import {
  getIsSelectedComponent,
  getIsHovered,
} from '../core/selectors/components'
import { getShowLayout, getFocusedComponent } from '../core/selectors/app'
import { wrapperProps } from '../components/editor/ComponentWrapper'

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
  const dragableWrapperProps: Partial<wrapperProps> = {
    ref: drag(ref),
    className: '',
    childClassName: component.props.className,
    onMouseOver: event => {
      event.stopPropagation()
      dispatch.components.hover(component.id)
    },
    onMouseOut: () => {
      dispatch.components.unhover()
    },
    onClick: event => {
      event.preventDefault()
      event.stopPropagation()
      dispatch.components.select(component.id)
    },
    onDoubleClick: event => {
      event.preventDefault()
      event.stopPropagation()
      if (focusInput === false) {
        dispatch.app.toggleInputText()
      }
    },
    isHovered: isHovered && !isComponentSelected,
    isSelected: isComponentSelected,
    showLayout,
    componentType: component.type,
  }

  return { dragableWrapperProps, drag }
}
