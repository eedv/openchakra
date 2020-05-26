/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, forwardRef, useState } from 'react'
import styled from '@emotion/styled'
type displayType = 'block' | 'inline-block' | 'contents'

export const Wrapper = styled.div<wrapperProps & { displayType: displayType }>`
  display: ${({ displayType }) => displayType || 'contents'};
  position: relative;
  &.show-layout {
    padding: 1rem;
    outline: 1px dashed grey;
  }
  &.is-drop-target {
    background-color: rgba(124, 138, 227, 0.4);
  }

  &.is-drop-target::before {
    position:absolute;
    content: "${({ componentType }) => componentType}";
    top: -1.1rem;
    font-size: 0.85rem;
  }

  &.is-hovered {
    cursor: pointer;
    outline: 2px dashed rgba(124, 138, 227, 0.8);
  }
  &.is-hovered::before, &.is-selected::before {
    position:absolute;
    content: "${({ componentType }) => componentType}";
    top: -1.1rem;
    left: 0;
    font-size: 0.85rem;

  }

  &.is-selected {
    outline: 2px solid rgba(124, 138, 227);
  }
`
declare global {
  interface Window {
    chrome: any
  }
}

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

// eslint-disable-next-line react/display-name
export const ComponentWrapper = forwardRef((props: any, ref: any) => {
  const [displayType, setDisplayType] = useState<displayType>('contents')

  useEffect(() => {
    if (ref && ref.current && ref.current.firstChild) {
      const componentElement = ref.current.firstChild
      if (
        componentElement.nodeType === document.TEXT_NODE ||
        getComputedStyle(componentElement).display.indexOf('inline') !== -1
      ) {
        setDisplayType('inline-block')
      } else {
        setDisplayType('block')
      }
    }
  }, [ref, props])
  const {
    className,
    childClassName,
    showLayout,
    isOver,
    isHovered,
    isSelected,
  } = props
  const classNames = [
    className || '',
    showLayout ? 'show-layout' : '',
    isOver ? 'is-drop-target' : '',
    isHovered ? 'is-hovered' : '',
    isSelected ? 'is-selected' : '',
    childClassName || '',
  ]

  return (
    <Wrapper
      {...props}
      className={classNames.join(' ').trim()}
      displayType={displayType}
      ref={ref}
    />
  )
})
