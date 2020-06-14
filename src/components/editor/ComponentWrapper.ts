/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
type displayType = 'block' | 'inline-block' | 'contents'

export const Wrapper = styled.div<{
  displayType: displayType
  componentType: string | ComponentType
}>`
  display: ${({ displayType }) => displayType || 'contents'};
  position: relative;
  &.show-layout {
    padding: 1rem;
    outline: 1px dashed grey;
  }
  &.is-drop-target {
    background-color: rgba(124, 138, 227, 0.4);
  }
  &.is-hovered {
    cursor: pointer;
    outline: 2px dashed rgba(124, 138, 227, 0.8);
  }
  &::after {
    position:absolute;
    display: none;
    background-color: white;
    border: 1px solid rgba(124, 138, 227, 0.8);
    border-radius: 3px;
    padding: 0 6px;
    transform: translate(-3px, -120%);
    font-weight: bold;
    content: "${({ componentType }) => componentType}";
    top: 0;
    left: 0;
    font-size: 0.85rem;
  }
  &.is-hovered::after, &.is-selected::after, &.is-drop-target::after {
    display: block;
  }

  &.is-selected {
    outline: 2px solid rgba(124, 138, 227);
  }
`

export type wrapperProps = {
  ref: any
  className: string
  childClassName: string
  isOver: boolean
  isContainer: boolean
  isHovered: boolean
  isSelected: boolean
  showLayout: boolean
  componentType: ComponentType
  onMouseOver: (event: React.MouseEvent<HTMLElement>) => void
  onMouseOut: (event: React.MouseEvent<HTMLElement>) => void
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onDoubleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const unWrappableElements = [
  'tbody',
  'thead',
  'th',
  'tr',
  'tbody',
  'td',
  'option',
]

// TODO: improve typings
export const useComponentStyles = (params: any) => {
  const [displayType, setDisplayType] = useState<displayType>('contents')
  const [nodeName, setNodeName] = useState('')
  useEffect(() => {
    if (params.ref && params.ref.current && params.ref.current.firstChild) {
      const componentElement = params.ref.current.firstChild
      setNodeName(componentElement.nodeName.toLowerCase())
      if (
        componentElement.nodeType === document.TEXT_NODE ||
        getComputedStyle(componentElement).display.indexOf('inline') !== -1
      ) {
        setDisplayType('inline-block')
      } else {
        setDisplayType('block')
      }
    }
  }, [params])
  const {
    className,
    childClassName,
    showLayout,
    isOver,
    isHovered,
    isSelected,
  } = params
  const classNames = [
    className || '',
    showLayout ? 'show-layout' : '',
    isOver ? 'is-drop-target' : '',
    isHovered ? 'is-hovered' : '',
    isSelected ? 'is-selected' : '',
    childClassName || '',
  ]
  return { displayType, nodeName, classNames: classNames.join(' ').trim() }
}
