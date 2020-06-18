/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedComponentParent } from '../../core/selectors/components'
import ElementListItem from './elements-list/ElementListItem'
import useDispatch from '../../hooks/useDispatch'

const ParentInspector = () => {
  const parentComponent = useSelector(getSelectedComponentParent)
  const dispatch = useDispatch()

  const onSelect = () => {
    dispatch.components.select(parentComponent.id)
  }

  const onHover = () => {
    dispatch.components.hover(parentComponent.id)
  }

  const onUnhover = () => {
    dispatch.components.unhover()
  }

  return (
    <ElementListItem
      onMouseOut={onUnhover}
      onMouseOver={onHover}
      onSelect={onSelect}
      type={parentComponent.type}
    />
  )
}

export default ParentInspector
